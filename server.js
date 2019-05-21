const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get("/home", function(req, res) {
    // res.send("Welcome to friend finder home")
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });
  
  app.get("/survey", function(req, res) {
    // res.send("Welcome to friend finder survey")
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });

  app.get("/app/data/friends", function(req, res) {
    return res.json(people);
  });


//   app/data/friends/
  app.get("/:people", function(req, res) {
  var chosen = req.params.person;

  console.log(chosen);

  for (var i = 0; i < people.length; i++) {
    if (chosen === people[i].routeName) {
      return res.json(people[i]);
    }
  }

  return res.json(false);
});


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
