var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What's your name? ");

console.log("welcome "+ userName)

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log ("right!");
    score = score + 1;

  } else {
    console.log ("wrong!");
    score = score - 1;

  }
  console.log("Your current score is " + score)
}

play("from which metal thor hammer are made ", "uru");
play("who was with the tony stark in the cave ", "yensin");
play("To bring which thing Tony asked Yensin to break the missile? ", "palladium");
play("what year does captain america wake up ", "2011");
play("What type of gun does star Lord use? ", "quad blasters");

console.log ("your final score is " 
+ score)