class organizerS {
    constructor({ organizerR }) {
        this.organizerR = organizerR;
    }

    async getRoleData(userID) {
        try {
            const getRoleResponse = await this.organizerR.getRoleData(userID);
            if (getRoleResponse) {
                return getRoleResponse;
            }

            return false;
        } catch (e) {
            return false;
        }
    }
}

module.exports = organizerS;
