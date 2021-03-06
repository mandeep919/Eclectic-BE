const bodyParser = require("body-parser");
const routes = require("../api");
const config = require("../config");

const expressLoader = (app) => {
    app.get("/status", (req, res) => {
        res.status(200).end();
    });

    app.head("/status", (req, res) => {
        res.status(200).end();
    });

    app.get("/", (req, res) => {
        res.render("index", { title: config.applicationTitle });
    });

    app.use(bodyParser.json());
    app.use("/api", routes());
};

module.exports = expressLoader;
