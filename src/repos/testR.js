class testR {
    constructor({ db }) {
        this.db = db;
    }

    async getTestData() {
        let selectAttributes = ["*"
        ];

        let condition = {};

        let query = this.db
            .select(selectAttributes)
            .from("test")
            .where(condition)

        let testData = await query.then();

        return testData;
    }
}

module.exports = testR;
