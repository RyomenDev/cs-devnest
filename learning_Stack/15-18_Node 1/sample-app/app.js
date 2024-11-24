const express = require("express");
const app = express();
const { isAdmin } = require("./middleware/auth.js");
const { fetchBlogs } = require("./middleware/blog.js");
const connectDB = require("./config/db.js");
const mongoose = require("mongoose");

// app.get("/", isAdmin, (req, res) => {
//   // Code to fetch blogs - 100 lines
//   //   console.log(req.blogs);
//   res.send("Hello");
// });

// app.get("/blogs", fetchBlogs, (req, res) => {
//   return res.send(req.blogs);
// });

// connectDB();

mongoose
  .connect(
    "mongodb+srv://adityaagr694:adityaagr00@database.iy6osys.mongodb.net/Database"
  )
  .then((conn) => {
    app.listen(3000, () => {
      console.log(`Server is running on port 3000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("HELLO");
});
