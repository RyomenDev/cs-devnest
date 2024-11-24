const isAdmin = (req, res, next) => {
  /// Figure out if current user is a admin
  const isAdmin = false;
  if (isAdmin) {
    next();
  } else {
    return res.send({ error: "Not a Admin" });
  }
};

module.exports = {
  isAdmin,
};
