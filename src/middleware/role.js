class roleM {
    constructor({ organizerS, authM }) {
        this.organizerS = organizerS;
        this.authM = authM;
    }

    authRole = async (req, res, next) => {
        const userID = req.userID;
        if (userID) {
            req.role = await this.organizerS.getRoleData(userID);
            if (req.role.role == "admin") {
                return next();
            }
            return res.status(401).send({ message: " Invalid UserID" });
        }
        return res.status(401).send({ message: "UserID Not Provided" });
    };
}

module.exports = roleM;
