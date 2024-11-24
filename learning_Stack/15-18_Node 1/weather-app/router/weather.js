const { Router } = require("express");
const router = new Router();

router.get("/", (req, res) => {
  res.send("<h1> Weather </h1>");
});

router.get("/*", (req, res) => {
  res.send("<h1>This Page doesn't exist in Weather Section </h1>");
});

module.exports = router;
