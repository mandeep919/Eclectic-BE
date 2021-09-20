const awilix = require("awilix");
const { asValue, asClass } = require("awilix");
const db = require("../config/database");
const authS = require("../services/authS");
const testS = require("../services/testS");
const organizerS = require("../services/organizerS");
const organizerR = require("../repos/organizerR");
const testR = require("../repos/testR");
const authM = require("../middleware/authentication");
const roleM = require("../middleware/role");
const domainIdentifier = require("../middleware/domainIdentifier");

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
});

function setup() {
    container.register({
        db: asValue(db),
        authS: asClass(authS),
        testS: asClass(testS),
        organizerS: asClass(organizerS),
        testR: asClass(testR),
        organizerR: asClass(organizerR),
        authM: asClass(authM),
        roleM: asClass(roleM),
        domainIdentifier: asClass(domainIdentifier)
    });
}

module.exports = { container, setup };
