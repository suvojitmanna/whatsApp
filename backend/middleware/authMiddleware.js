const jwt = require("jsonwebtoken");
const response = require("../utils/responseHandeler");

const authMiddleware = (req, res, next) => {
  // const authToken = req.cookies?.auth_token;

  // if (!authToken) {
  //   return response(res, 401, "Unauthorized");
  // }

  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return response(res, 401, "Unauthorized");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log(req.user);
    next();
  } catch (error) {
    return response(res, 401, "Invalid or expired token");
  }
};

module.exports = authMiddleware;
