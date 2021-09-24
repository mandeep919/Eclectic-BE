const { Router } = require("express");
const { container } = require("../../loders/dependencyInjector");

const auth = (app) => {
    const route = Router();
    app.use("/v1", route);

    route.post("/signup", async (req, res) => {
        const authS = container.resolve("authS");
        const data = req.body;

        const response = await authS.signup(data);
        if (response) {
            return res.status(200).json({ msg: "SignedUp" });
        }
    });

    route.post("/login", async (req, res) => {
        const authS = container.resolve("authS");
        const data = req.body;
        const response = await authS.login(data);
        if (response) {
            return res.status(200).json({ success: true, data: response });
        }
        return res.status(401).send({ message: "Token Not Provided" });
    });

    route.post("/profile", async (req, res) => {
        const authS = container.resolve("authS");
        const data = req.body;
        const response = await authS.getUser(data);
        if (response) {
            return res.status(200).json({ success: true, data: response });
        }
        return res.status(401).send({ message: "Token Not Provided" });
    });
};

module.exports = auth;
