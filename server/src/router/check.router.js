const express = require("express");
const { getEspecificUser } = require("../controller/check.controller");

const checkRouter = express.Router();

checkRouter.get("/:id", getEspecificUser);

module.exports = checkRouter;
