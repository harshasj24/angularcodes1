const usersSchema = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
SCERET_KEY = "###120S@F";
let rigisterData = async (req, res, next) => {
  let { fName, lName, email, password, role } = req.body;
  try {
    let emailExits = await usersSchema.findOne({ email });
    if (emailExits) {
      res.json({
        error: true,
        message: "Email already exists",
        data: null,
      });
    } else {
      let saltrounds = 10;
      const salt = await bcrypt.genSalt(saltrounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      await usersSchema.insertMany([
        {
          fName,
          lName,
          email,
          role,
          password: hashedPassword,
        },
      ]);
      res.status(200).json({
        error: false,
        message: "register sucesss",
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

let login = async (req, res, next) => {
  let { email, password, role } = req.body;
  try {
    let userData = await usersSchema.findOne({ email });
    let { fName, lName, role } = userData;
    if (userData) {
      const passMatch = await bcrypt.compare(password, userData.password);
      if (passMatch) {
        const payload = { fName, lName, role };
        const token = await jwt.sign(payload, SCERET_KEY, {
          expiresIn: "8h",
        });
        res.json({
          error: false,
          message: " login Sucessful",
          data: { fName, lName, role, token },
        });
      } else {
        res.status(400).json({
          error: true,
          message: "invalid Password",
          data: null,
        });
      }
    } else {
      res.json({
        error: true,
        message: "invalid user",
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  rigisterData,
  login,
};
