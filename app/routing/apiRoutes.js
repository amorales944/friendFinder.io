const path = require("path");
const people = require("../data/friends");
// ************************************************************

module.exports = function (app) {
  app.get("../public/friends", function (req, res) {
    res.json(people);
  });
}