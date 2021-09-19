const { web: config } = require("../src/config");
const express = require("express");
const mustacheExpress = require("mustache-express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const favicon = require("serve-favicon");
const path = require("path");
const limiter = rateLimit({
    windowMs: process.env.WINDOW_MS,
    max: process.env.MAX_REQUEST_LIMIT
});

async function startServer() {
    const app = express();

    app.use(
        favicon(path.join(__dirname, "../" + "public", "favicon.ico"), {
            maxAge: process.env.CACHE_CONTROL_MAX_AGE
        })
    );
    
    app.use(helmet());
    app.use(limiter);
    app.use(cors());
    app.options('*', cors());
    app.engine('mustache', mustacheExpress());
    app.set('view engine', 'mustache');
    app.set('views', 'public');
    app.use(express.static('public'))

    const port = config.port;
    await require("./loders")(app);

    app.listen(port, (err) => {
        if (err) {
            console.log(err);
            process.exit(1);
            return;
        }

        console.log("Example app listening on port " + port);
    });
}

startServer();
