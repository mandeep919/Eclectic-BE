const test = require("./router/test");
const { Router } = require("express");
const auth = require("./router/auth");

const router = () => {
    const app = Router();
    test(app);
    auth(app);

    return app;
};

module.exports = router;
