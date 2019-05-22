const path = require("path");
var selectedAnswers = [];
var questions = document.getElementById("questions");

function questionSelected ()  {
  for (var i = 0; i < selectedAnswers.length; i++) {     // parsing with array.length
    console.log(selectedAnswers[i]);
}

}


const people = [
{
    "routeName":  "ahmed",
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
]

module.exports = people;