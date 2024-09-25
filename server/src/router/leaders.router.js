const express = require("express");
const { getLeader } = require("../controller/leader.controller");

const leadersRouter = express.Router();

leadersRouter.get("", getLeader);

module.exports = leadersRouter;
