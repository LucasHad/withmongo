const data = require("../model/data");

function getLeader(req, res) {
  res.json(data);
}

module.exports = {
  getLeader,
};
