const { web: config } = require("../src/config");
const express = require("express");
const mustacheExpress = require("mustache-express");
const cors = require("cors");
const helmet = require("helmet");

async function startServer() {
    const app = express();
    app.use(helmet());
    app.use(cors());
    app.options("*", cors());
    app.engine("mustache", mustacheExpress());
    app.set("view engine", "mustache");
    app.set("views", "public");
    app.use(express.static("public"));

    const port = config.port;
    await require("./loders")(app);

    app.listen(port, (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("Example app listening on port " + port);
    });
}
startServer();
