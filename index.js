var radLineSync = require("readline-sync");

var score = 0;

console.log(`How well do you know Rohan `);
console.log(`****************************`)

var game = (question,answer) => {
  var playerAnswer = radLineSync.question(question);
  if(playerAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(`
Well done, right answer
      `);
    score++
  } else {
    console.log(`
Sorry, that was wrong`);
  }
  console.log("Your current score is : " + score);
  console.log(`
**********************************`)
}

var questionSet = [{
  question : `
Rohan's hometown is ______ 

Your Answer : `,
  answer : "Kanpur"
},
{
  question : `
Rohan is _______ years old 

Your Answer : `,
  answer : "21"
},
{
  question : `
Rohan's favourite dish is _________

Your Answer : `,
  answer : "Butter Chicken"
},
{
  question : `
Rohan is a _____________ by profession

Your Answer : `,
  answer : "Developer"
},
{
  question :`
Rohan's pet name is ______

Your Answer : `,
  answer : "Leo"
}];

for(var i = 0; i<questionSet.length; i++){
  questionSet[i];
  game(questionSet[i].question, questionSet[i].answer);
}

console.log("Your final score is : " + score)

