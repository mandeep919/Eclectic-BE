const emitter = require("./eventMediator");
const { container } = require("../loders/dependencyInjector");
const requestHandlerS = container.resolve("requestHandlerS");

emitter.on(`${process.env.ERROR_LOG_MSG}`, (errorLog) => {
    let log = errorLog.stack ? errorLog.stack.toString() : errorLog.toString();
    let message = errorLog.message ? errorLog.message.toString() : '';
    let type = 'typeTest';
    const request = {
        body: { log, message, type, client: "emporium-api" },
        method: "post",
        url: `${process.env.ERROR_LOG_URL}/api/log`
    };
    requestHandlerS.makeRequest(request);
});
