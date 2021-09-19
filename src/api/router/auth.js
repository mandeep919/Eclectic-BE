const { Router } = require("express");
const { container } = require("../../loders/dependencyInjector");

const auth = (app) => {
  const route = Router();
  app.use("/v1", route);

  route.get("/authorize", async (req, res) => {
    const authS = container.resolve("authS");
    const token = req.headers.token;
    if (token) {
      const response = await authS.authorizeWithSSO(token);
      return res.status(200).json({ data: response });
    }
    return res.status(401).send({ message: "Token Not Provided" });
  });

  route.get("/api-key", async (req, res) => {
    const authS = container.resolve("authS");
    const { domainID } = req;
    const service = req.headers.service;
    const apiKey = await authS.getAPIKey(domainID, service);

    if (apiKey) {
      return res.status(200).send({ data: apiKey });
    }
    return res.status(400).json({ status: "Fail" });
  });
};

module.exports = auth;
