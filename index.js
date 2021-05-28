const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));

app.use("/", express.static("views"));

app.use("/static", express.static(path.join(__dirname, "public")));

require("./routes/user.routes")(app);

app.listen(port, () => {
  console.log(`Application running at http://localhost:${port}`);
});

module.exports = app;
