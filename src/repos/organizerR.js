class organizerR {
    constructor({ db }) {
        this.db = db;
    }

    async getRoleData(userID) {
        let selectAttributes = ["role as role"];

        let condition = { user_id: userID };

        let query = this.db
            .select(selectAttributes)
            .from("role")
            .where(condition)
            .first();

        let roleData = await query.then();
        return roleData;
    }
}

module.exports = organizerR;
