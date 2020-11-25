var radLineSync = require("readline-sync");

var score = 0;

var game = (question,answer) => {
  var playerAnswer = radLineSync.question(question);
  if(playerAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Well done, right answer");
    score++
  } else {
    console.log("Sorry, that was wrong");
  }
  console.log("Your current score is : " + score);
  console.log("**********************************")
}

var questionSet = [{
  question : "What's your name ",
  answer : "Rohan"
},
{
  question : "What's your age ",
  answer : "21"
},
{
  question : "What's your favourite food ",
  answer : "Butter chicken"
},
{
  question : "Where do you live ",
  answer : "Kanpur"
},
{
  question : "What's your profile ",
  answer : "Developer"
}];

for(var i = 0; i<questionSet.length; i++){
  questionSet[i];
  game(questionSet[i].question, questionSet[i].answer);
}

console.log("Your final score is " + score)

