const fs = require("fs");

exports.create = async (req, res) => {
  const data = JSON.stringify(req.body);

  fs.writeFileSync("./data/user.json", data);

  res.status(200).send({statue: 200, ...req.body});
};
