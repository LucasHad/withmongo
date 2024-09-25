const data = require("../model/data");

function createNewUser(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "name is missing",
    });
  }

  const newUser = {
    id: data.length,
    name: req.body.name,
    age: req.body.age,
    color: req.body.color,
    userName: req.body.userName,
  };

  data.push(newUser);
  res.json(newUser);
}

module.exports = {
  createNewUser,
};
