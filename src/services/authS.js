class authS {
    constructor({ organizerR, testR }) {
        this.organizerR = organizerR;
        this.testR = testR;
    }

    async signup(data) {
        try {
            const apikey = await this.testR.signup(data);
            if (apikey) {
                return true;
            }
            return false;
        } catch (e) {
            console.log("Signup auth Error", e);
            return false;
        }
    }

    async login(data) {
        try {
            console.log(data, "asdfasdf");
            const apikey = await this.testR.getUser(data);
            if (
                apikey.userName == data.userName &&
                apikey.password == data.password
            ) {
                return apikey;
            }
            return false;
        } catch (e) {
            console.log("Signup auth Error", e);
        }
    }

    async getUser(data) {
        try {
            console.log(data, "asdfasdf");
            const apikey = await this.testR.getUser(data);
            if (apikey) {
                return apikey;
            }
            return false;
        } catch (e) {
            console.log("Signup auth Error", e);
        }
    }

    async getAllUser() {
        try {
            const apikey = await this.testR.getAllUser();
            if (apikey) {
                return apikey;
            }
            return false;
        } catch (e) {
            console.log("Get all user failed", e);
        }
    }
}

module.exports = authS;
