const express = require("express");

const { SignUp, Login } = require("../Controllers/User");
const {
  RegisterValidation,
  Validation,
  LogValidation,
} = require("../Middlewares/RegisterValidator");
const { isAuth } = require("../Middlewares/isAuth");

const userRouter = express.Router();
//SignUp
userRouter.post("/SignUp", RegisterValidation, Validation, SignUp);

//LogUp
userRouter.post("/Login", LogValidation, Validation, Login);

userRouter.get("/GetUser", isAuth, (req, res) => res.send(req.user));

module.exports = userRouter;
