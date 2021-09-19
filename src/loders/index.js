const expressLoader = require("./expressLoader");
const { setup } = require("./dependencyInjector");

const loaders = async (app) => {
    await setup();
    await expressLoader(app);
};

module.exports = loaders;
