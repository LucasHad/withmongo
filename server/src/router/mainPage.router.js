const express = require("express");
const { createNewUser } = require("../controller/MainPage.controller");

const mainPageRouter = express.Router();

mainPageRouter.post("", createNewUser);

module.exports = mainPageRouter;
