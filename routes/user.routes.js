const UserController = require("../controllers/user.controller");

module.exports = function(app) {
  app.post("/save", UserController.create);
};
