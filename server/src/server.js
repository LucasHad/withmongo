const http = require("http");
const app = require("./app");
const express = require("express");
const mongoose = require("mongoose");
const User = require("../src/model/schema");

const server = http.createServer(app);

mongoose.connect("mongodb://localhost:27017");

async function run() {
  const user = await User.create({
    name: "lucas",
    age: 20,
    color: "blue",
    userName: "griffin",
  });
}

run();

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
