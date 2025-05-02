const express = require("express");

// Import handlers:
const {
    signin,
    signup,
} = require("../controllers/loginController");

const loginRouter = express.Router();

loginRouter.post("/", signin);
loginRouter.post("/register", signup);

module.exports = loginRouter;
