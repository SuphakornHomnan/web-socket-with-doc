const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "html");
app.set("views", path.join(__dirname, "public"));
app.engine("html", require("ejs").renderFile);

app.get("/docs", (req, res) => {
  res.render("index.html");
});

app.listen(4000);
