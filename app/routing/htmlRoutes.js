const path = require("path");
const people = require("../data/friends");
// ************************************************************

module.exports = function (app) {
  app.get("/survey", function(req, res) {
    // res.send("Welcome to friend finder survey")
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  app.post("/surveyPost", function (req, res) {
    people.push(req.body);
    console.log(people);
  })

  app.get("*", function(req, res) {
    // res.send("Welcome to friend finder home")
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};