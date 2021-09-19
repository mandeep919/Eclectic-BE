const bodyParser = require("body-parser");
const routes = require("../api");
const config = require("../config");
const { container } = require("./dependencyInjector");

const expressLoader = (app) => {
    app.get("/status", (req, res) => {
        res.status(200).end();
    });

    app.head("/status", (req, res) => {
        res.status(200).end();
    });

    app.get("/", (req, res) => {
        res.render('index', { title: config.applicationTitle });
    });

    app.use(bodyParser.json());
    app.use(container.resolve("domainIdentifier").identify);
    app.use("/api", routes());
};

module.exports = expressLoader;
