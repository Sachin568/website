const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cookieParser =require("cookie-parser");
const hbs = require("express-handlebars");
const sessions = require("session");
const app = express();
const configRoutes = require("./routes");

app.use(bodyParser.json());
configRoutes(app);

app.set("vi")

app.use(cookieParser);

app.engine("handlebars", hbs({
  extname: ".handlebars",
  defaultLayout: "main",
  layoutsDir: __dirname + "./views/layouts/",
  redirectDir: __dirname + "./views/",

}));

app.use("session",sessions ({
  name: "AuthCookies",
  saveUninitialized: true,
  resave: false,


}))

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});