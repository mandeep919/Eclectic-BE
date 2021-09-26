class testR {
    constructor({ db }) {
        this.db = db;
    }

    async getTestData() {
        let selectAttributes = ["*"];

        let condition = {};

        let query = this.db
            .select(selectAttributes)
            .from("test")
            .where(condition);

        let testData = await query.then();

        return testData;
    }

    async signup(data) {
        let query = this.db
            .insert({
                userName: data.userName,
                firstName: data.firstName,
                lastName: data.lastName,
                password: data.password,
                email: data.email
            })
            .into("users");

        let testData = await query.then();

        return testData;
    }

    async getUser(data) {
        let selectAttributes = ["*"];

        let query = this.db
            .select(selectAttributes)
            .from("users")
            .where("userName", "=", data.userName);

        let testData = await query.then();

        return testData[0];
    }

    async getAllUser() {
        let selectAttributes = ["*"];

        let query = this.db.select(selectAttributes).from("users");

        let testData = await query.then();

        return testData;
    }
}

module.exports = testR;
