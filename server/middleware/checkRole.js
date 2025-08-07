const checkRole = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.userRole; // set by authMiddleware

    if (!allowedRoles.includes(userRole)) {
      return res
        .status(403)
        .json({ error: "Access denied: Unauthorized role" });
    }

    next();
  };
};

module.exports = checkRole;
