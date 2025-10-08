/* write a function that randonly returns
"rock", "paper", or "scissors". */

function getComputerChoice() {
  const randomNumber = Math.random();
  let computerMove = ' ';
  
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  return computerMove;
}
console.log(getComputerChoice( ));

/* write the logic to get the human choice.
Write a function that takes the user choice 
and returns it */

let humanOption = window.prompt('please pick: rock, paper, or scissors');

function getHumanChoice () {
  let userChoice = ' ';

  if (humanOption === 'rock') {
    userChoice = 'rock';
  } else if (humanOption === 'paper') {
    userChoice = 'paper';
  } else if (humanOption === 'scissors') {
    userChoice = 'scissors';
  }
   return userChoice;
}
/* console.log(typeof getHumanChoice()); This helped me discovery that my getHumanChoice 
function is being treated as a string */

console.log(getHumanChoice());

//let humanScore = 0;
//let computerScore = 0;

//step 1: create the logic for who wins and looses  
/* try to condense the code because you need two perspectives: the signs 
that win and the signs that loose. maybe try nesting */
//work on case sensitivity (make humanChoice insensitive)
//increment the score based on the winner. might try using a loop for 5 rounds 

function playRound (humanChoice, computerChoice){
  if(humanChoice === 'rock'){
    if(computerChoice === 'rock'){
      result = 'Tie.';
    } else if (computerChoice === 'paper'){
      result = 'You lose.';
    } else if (computerChoice === 'scissors'){
      result = 'You Win!';
    }
  } else if (humanChoice === 'paper'){
    if(computerChoice === 'rock'){
      result = 'You Win!';
    } else if (computerChoice === 'paper'){
      result = 'Tie.';
    } else if (computerChoice === 'scissors'){
      result = 'You lose.';
    }
  } else if (humanChoice === 'scissor'){
    if (computerChoice === 'rock'){
      result = 'You lose.';
    } else if (computerChoice === 'paper'){
      result = 'You Win!';
    } else if (computerChoice === 'scissors'){
      result = 'Tie.';
    }
  }
} 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(typeof getHumanChoice());
console.log(typeof getComputerChoice());
//my functions are currently strings :( 
/* current problem: 
I need to figure out a way to keep my functions as functions and not strings */


/* current issue: getHumanChoice and getComputerChoice are receiving a type error:
"not a function".this is likely due to scope. I will need to resolve it */


