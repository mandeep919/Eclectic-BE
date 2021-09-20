class authM {
    constructor({ authS }) {
        this.authS = authS;
    }

    authenticate = async (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            req.userID = await this.authS.verifyToken(token);

            if (req.userID) {
                return next();
            }
            return res.status(401).send({
                message: " Invalid Token || Token Verification Failed"
            });
        }

        return res.status(401).send({ message: "Token Not Provided" });
    };
}

module.exports = authM;
