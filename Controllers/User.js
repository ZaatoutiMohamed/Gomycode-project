const User = require("../Models/User.js");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

//SignUp
exports.SignUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    const found = await User.findOne({ email });
    if (found) {
      return res
        .status(400)
        .send({ errors: [{ msg: "email already exists" }] });
    }
    const newUser = new User(req.body);

    // Store hash in your password DB.
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);

    newUser.password = hashedPassword;

    // Generate Token
    const payload = {
      id: newUser._id,
      name: newUser.name,
    };
    var token = jwt.sign(payload, process.env.privateKey);

    newUser.save();

    res.status(200).send({ msg: "New User registred", newUser, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "could not register" }] });
  }
};

//Login
exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const found = await User.findOne({ email });
    if (!found) {
      return res.status(400).send({ errors: [{ msg: "wrong email" }] });
    }

    const match = await bcrypt.compare(password, found.password);
    if (!match) {
      res.status(400).send({ errors: [{ msg: "wrong password" }] });
    }

    const payload = { id: found._id };
    var token = jwt.sign(payload, process.env.privateKey);
    res.status(200).send({ msg: "logged in", found, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "could Not logged in" }] });
  }
};
