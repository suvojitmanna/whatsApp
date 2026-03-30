const jwt = require("jsonwebtoken");
const response = require("../utils/responseHandeler");

const authMiddleware = (req, res, next) => {
  const authToken = req.cookies?.auth_token;

  if (!authToken) {
    return response(res, 401, "Unauthorized");
  }

  try {
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
    req.user = decoded;
    console.log(req.user);
    next();
  } catch (error) {
    return response(res, 401, "Invalid or expired token");
  }
};

module.exports = authMiddleware;