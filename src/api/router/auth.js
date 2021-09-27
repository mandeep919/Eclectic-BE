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
            return res
                .status(200)
                .json({ success: true, message: "User Signed Up" });
        }
        if (!response) {
            return res
                .status(200)
                .json({ success: false, message: "User Signup failed" });
        }
    });

    route.post("/login", async (req, res) => {
        const authS = container.resolve("authS");
        const data = req.body;
        const response = await authS.login(data);
        if (response) {
            return res.status(200).json({
                success: true,
                data: response,
                message: "User Logged In"
            });
        }
        return res.status(401).send({ message: "User Login Failed" });
    });

    route.get("/profile", async (req, res) => {
        const authS = container.resolve("authS");
        const data = req.body;
        const response = await authS.getUser(data);
        if (response) {
            return res.status(200).json({ success: true, data: response });
        }
        return res.status(401).send({ message: "Token Not Provided" });
    });

    route.get("/allUsers", async (req, res) => {
        const authS = container.resolve("authS");
        const response = await authS.getAllUser();
        if (response) {
            return res.status(200).json({ success: true, data: response });
        }
        return res
            .status(401)
            .json({ success: false, message: "Get Users Failed" });
    });

    route.get("/messages", async (req, res) => {
        const authS = container.resolve("authS");
        const response = await authS.getMessages();
        if (response) {
            return res.status(200).json({ success: true, data: response });
        }
        return res
            .status(401)
            .json({ success: false, message: "Get Messages Failed" });
    });

    route.get("/notification", async (req, res) => {
        const authS = container.resolve("authS");
        const response = await authS.getNotif();
        if (response) {
            return res.status(200).json({ success: true, data: response });
        }
        return res
            .status(401)
            .json({ success: false, message: "Get notifications Failed" });
    });

    route.get("/searchPosts", async (req, res) => {
        const authS = container.resolve("authS");
        const data = req.query.searchText;
        const response = await authS.searchPosts(data);
        if (response) {
            return res.status(200).json({ success: true, data: response });
        }
        return res
            .status(401)
            .json({ success: false, message: "get search posts Failed" });
    });
};

module.exports = auth;
