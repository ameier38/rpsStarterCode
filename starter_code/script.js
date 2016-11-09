/* global $ */

var ROCK = 'rock';
var PAPER = 'paper';
var SCISSORS = 'scissors';
var COMPUTER_WINS = 'computer wins';
var USER_WINS = 'user wins';
var DRAW = 'draw';
var VALID_CHOICES = [ROCK, PAPER, SCISSORS];
var VALID_OUTCOMES = [COMPUTER_WINS, USER_WINS, DRAW];

// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var generateComputerChoice = function () {
    // Task 1, Step 2: Use the JavaScript Math function to generate a random whole
    // number between 0 and 2. Be sure to save it to a variable.
    
    // Task 1, Step 3: Use this randomly generated number to pull a value from the
    // array (eg myArray[randomNum])
    
    // Task 1, Step 4: return this new value
};

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.
var pickWinner = function (userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    var outcome = ''
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the
    // userChoice and computerChoice under any possible game outcome.
    if (userChoice == ROCK) {
       if (computerChoice == ROCK) {
           outcome = DRAW;
       }
       else if (computerChoice == PAPER) {
           outcome = COMPUTER_WINS;
       }
       else {
           outcome = DRAW;
       }
    }
    else if (userChoice == PAPER) {
       if (computerChoice == ROCK) {
           outcome = USER_WINS;
       }
       else if (computerChoice == PAPER) {
           outcome = DRAW;
       }
       else {
           outcome = COMPUTER_WINS;
       }
    }
    else {
       if (computerChoice == ROCK) {
           outcome = DRAW;
       }
       else if (computerChoice == PAPER) {
           outcome = USER_WINS;
       }
       else {
           outcome = DRAW;
       }
    }
    
    $('#computer-choice').text('The computer picked ' + computerChoice);
    $('#winner').text('Outcome: ' + outcome);
};

var handleUserClick = function(userChoice){
    // validate the user_choice
    // TODO
    
};