const express = require("express");
const checkRouter = require("./router/check.router");
const leadersRouter = require("./router/leaders.router");
const mainPageRouter = require("./router/mainPage.router");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.use("/data", checkRouter);
app.use("/leaders", leadersRouter);
app.use("", mainPageRouter);

module.exports = app;
