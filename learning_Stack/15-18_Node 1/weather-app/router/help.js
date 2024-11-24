const { Router } = require("express");
const router = new Router();

router.get("/", (req, res) => {
  // res.send("<h1> HELP </h1>");
  res.render("help.ejs");
});

router.get("/*", (req, res) => {
  res.send("<h1>This Page doesn't exist in Help Section </h1>");
});

module.exports = router;
