const isAdminMiddleware = (req, res, next) => {
  if (!req.userRole || req.userRole !== "admin") {
    return res.status(403).json({ error: "Access denied. Admins only." });
  }
  next();
};

module.exports = isAdminMiddleware;
