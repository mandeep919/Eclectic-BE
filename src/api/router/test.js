const { Router } = require("express");
const { container } = require("../../loders/dependencyInjector");

const test = (app) => {
  const route = Router();
  app.use("/test", route);

  route.get("/", async (req, res) => {
    const testS = container.resolve("testS");
    const domainID = req.domainID;
    const getTestResponse = await testS.getTest(domainID);
    if (getTestResponse) {
      return res.status(200).json({
        data: getTestResponse,
      });
    }

    return res.status(400).json({ status: "Fail" });
  });
};

module.exports = test;
