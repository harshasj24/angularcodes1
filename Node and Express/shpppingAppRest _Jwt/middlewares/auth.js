const jwt = require("jsonwebtoken");
SCERET_KEY = "###120S@F";
const authoriseduseradmin = async (req, res, next) => {
  console.log(req.headers["authorization"]);
  if (req.headers["authorization"]) {
    const token = await req.headers["authorization"].split(" ")[1];
    const payload = await jwt.verify(token, SCERET_KEY);
    if (payload.role === "admin" || payload.role === "user") {
      next();
    } else {
      res.json({
        error: true,
        message: "INvalid",
        data: null,
      });
    }
  } else {
    res.json({
      message: "invalid",
    });
  }
};

const authorisedadmin = async (req, res, next) => {
  console.log();
  if (req.headers["authorization"]) {
    const token = await req.headers["authorization"].split(" ")[1];
    const payload = await jwt.verify(token, SCERET_KEY);
    if (payload.role === "admin") {
      next();
    } else {
      res.json({
        error: true,
        message: "INvalid",
        data: null,
      });
    }
  }
};

module.exports = {
  authoriseduseradmin,
  authorisedadmin,
};
