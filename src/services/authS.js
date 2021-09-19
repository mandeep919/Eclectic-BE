const jwt = require("jsonwebtoken");
const randomString = require("randomstring");
const durationSeconds = 600;
const { api, encryptString } = require("../config");

class authS {
    constructor({ organizerR }) {
        this.organizerR = organizerR;
    }

    setExpirationTime = () => {
        return Date.now() + durationSeconds * 1000;
    };

    async generateToken(user) {
        try {
            const token = jwt.sign(
                { id: user.id, email: user.email },
                encryptString
            );

            const refreshToken = randomString.generate();
            const expiresAt = this.setExpirationTime();

            const tokenInfo = {
                access_token: token,
                refresh_token: refreshToken,
                expires_at: expiresAt
            };

            await this.organizerR.storeTokenInfo(tokenInfo, user.id);

            return tokenInfo;
        } catch (e) {
            this.emitterS.emitError(e);
            return false;
        }
    }

    async verifyToken(token) {
        return jwt.verify(token, encryptString, async (err, done) => {
            if (err) {
                this.emitterS.emitError(err);
                return false;
            }
            const userID = token ? await this.userR.getUserID(token) : null;
            return userID;
        });
    }

    async getTokenViaRefreshToken(refreshToken) {}

    async authorizeWithSSO(token) {
        try {
            let user = "";

            const ssoUser = await this.request.makeRequest({
                url: `${api.sso.user}/${token}`
            });

            if (ssoUser) {
                user = { email: ssoUser.email, id: ssoUser.sso_id };
                const jwtToken = this.generateToken(user);

                return jwtToken;
            }
        } catch (e) {
            console.log(e);
            //this.emitterS.emitError(e)
            return false;
        }
    }

    async getAPIKey(domainID, service) {
        try {
            const apikey = await this.vendorR.getApiKey(domainID, service);
            if (apikey) {
                return apikey;
            }
            return false;
        } catch (e) {
            this.emitterS.emitError(e);
        }
    }
}

module.exports = authS;
