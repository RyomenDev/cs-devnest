const express = require("express");

const app = express();

app.set("view-engine", "ejs");

// HTTP Routes

app.get("/", (req, res) => {
  //   res.send("<h1> HELLO </h1>");
  // Database -> name
  const name = "Aditya Agrawal";
  res.locals.firstName = name;
  res.locals.authorized = false;
  res.render("home.ejs");
});

app.use("/help", require("./router/help.js"));
app.use("/about", require("./router/about.js"));
app.use("/weather", require("./router/weather.js"));

app.get("*", (req, res) => {
  res.send("<h1> 404 NOT FOUND </h1>");
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
