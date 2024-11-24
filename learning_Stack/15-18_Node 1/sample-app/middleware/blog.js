const fetchBlogs = (req, res, next) => {
  // Fetch all the blogs
  const blogs = [{ title: "My First Blog" }];
  req.blogs = blogs;
  next();
};

module.exports = {
  fetchBlogs,
};
