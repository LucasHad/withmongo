const data = require("../model/data");

function getEspecificUser(req, res) {
  const id = Number(req.params.id);

  if (data[id]) {
    res.json(data[id]);
  } else {
    res.status(404).json({
      error: "no user found",
    });
  }
}

module.exports = {
  getEspecificUser,
};
