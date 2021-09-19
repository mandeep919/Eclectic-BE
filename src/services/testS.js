class testS {
    constructor({ testR }) {
        this.testR = testR;
    }

    async getTest() {
        try {
            const gettestDataResponse = await this.testR.getTestData();
            if (gettestDataResponse) {
                return gettestDataResponse;
            }

            return false;
        } catch (e) {
            this.emitterS.emitError(e);
            return false;
        }
    }
}

module.exports = testS;
