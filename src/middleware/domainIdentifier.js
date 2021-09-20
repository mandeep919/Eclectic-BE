class domainIdentifier {
    constructor({ db }) {
        this.db = db;
    }

    identify = async (req, res, next) => {
        let origin = req.headers.origin ? req.headers.origin : "";
        // var parts = origin.split(".");
        // parts.pop();
        // parts.pop();
        // var sndleveldomain = parts.slice(-1).join(".");
        var res = origin.replace("https://", "");
        var res = res.replace("http://", "");
        origin = res ?? origin;

        let domainID = await this.db
            .select("id")
            .from("domain")
            .where("name", origin)
            .then();

        if (domainID && domainID.length > 0) {
            req.domainID = domainID[0].id;
            req.domain = origin;
        }
        if (!req.domainID) {
            req.domainID = 1;
        }

        return next();
    };
}

module.exports = domainIdentifier;
