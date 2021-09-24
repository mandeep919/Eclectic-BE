const jwt = require("jsonwebtoken");
const randomString = require("randomstring");
const { api, encryptString } = require("../config");

class authS {
    constructor({ organizerR, testR }) {
        this.organizerR = organizerR;
        this.testR = testR;
    }

    async signup(data) {
        try {
            const apikey = await this.testR.signup(data);
            console.log("responsesignup", apikey);
            if (apikey) {
                return apikey;
            }
            return false;
        } catch (e) {
            console.log("Signup auth Error", e);
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
}

module.exports = authS;
