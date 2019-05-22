const express = require("express");
const app = express();
const path = require("path");
// ************************************************************


module.exports = function (app) {
app.use("/home", function(req, res) {
    // res.send("Welcome to friend finder home")
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
  
  app.use("/survey", function(req, res) {
    // res.send("Welcome to friend finder survey")
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
}

// app.listen(3000);
// module.exports = htmlRoutes.js;