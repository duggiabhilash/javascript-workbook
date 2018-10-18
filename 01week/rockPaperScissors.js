'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
hand 1 enters rock
hand 2 enters paper
convert the upper case to lower case 
validate if move is a valid input
check for valid input if the input is any of the following rock, paper or scissors
if any of the user input is not valid print in console with incorrect input, user name
if the input from the users is valid, we compare the user input 
if(hand 1 is rock and hand 2 is scissors) - hand 1 wins
if(hand 1 is rock and hand 2 is paper) - hand 2 wins
if(hand 1 is rock and hand 2 is rock) - it's a tie
if(hand 1 is paper and hand 2 is scissors) - hand 2 wins
if(hand 1 is paper and hand 2 is paper) - it's a tie
if(hand 1 is paper and hand 2 is rock) - hand 1 wins
if(hand 1 is scissors and hand 2 is paper) - hand 1 wins 
if(hand 1 is scissors and hand 2 is rock) - hand 2 wins
if(hand 1 is scissors and hand 2 is scissors) - it's a tie
*/


function rockPaperScissors(hand1, hand2) {

  getPrompt();

  hand1 = hand1.toLowerCase();
  hand2 = hand2.toLowerCase();

  if((hand1 == "rock" || hand1 == "scissors" || hand1 == "paper") && (hand2 == "rock" || hand2 == "scissors" || hand2 == "paper")) {
    if((hand1 == "rock") && (hand2 == "scissors"))
      console.log("Hand one wins!");
    else if((hand1 == "rock") && (hand2 == "paper"))
      console.log("Hand two wins!");
    else if((hand1 == "rock") && (hand2 == "rock"))
      console.log("It's a tie!");
    else if((hand1 == "paper") && (hand2 == "scissors"))
      console.log("Hand two wins!");
    else if((hand1 == "paper") && (hand2 == "paper"))
      console.log("It's a tie!");
    else if((hand1 == "paper") && (hand2 == "rock"))
      console.log("Hand one wins!");
    else if((hand1 == "scissors") && (hand2 == "paper"))
      console.log("Hand one wins!");
    else if((hand1 == "scissors") && (hand2 == "rock"))
      console.log("Hand two wins!");
    else if((hand1 == "scissors") && (hand2 == "scissors"))
      console.log("It's a tie!");
  }
  else {
    console.log("invalid input");
  }
  

  

  // Write code here
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
