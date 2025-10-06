/* write a function that randonly returns
"rock", "paper", or "scissors". */
function getComputerChoice() {
  const randomNumber = Math.random();
  
  if (randomNumber >= 0 && randomNumber < 1/3) {
    getComputerChoice = 'scissors';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    getComputerChoice = 'rock';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    getComputerChoice = 'paper';
  }
  return getComputerChoice;
}
console.log(getComputerChoice());

/* write the logic to get the human choice.
Write a function that takes the user choice 
and returns it */
function getHumanChoice () {
  let humanChoice = window.prompt('please pick: rock, paper, or scissors');

  if (humanChoice === 'rock') {
    getHumanChoice = 'rock';
  } else if (humanChoice === 'paper') {
    getHumanChoice = 'paper';
  } else if (humanChoice === 'scissors') {
    getHumanChoice = 'scissors';
  }
  return getHumanChoice;
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

//step 1: create the logic for who wins and looses  
/* try to condense the code because you need two perspectives: the signs 
that win and the signs that loose. maybe try nesting */
//work on case sensitivity (make humanChoice insensitive)
//increment the score based on the winner. might try using a loop for 5 rounds 

function playRound (humanChoice, computerChoice){
  if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log("You win! Paper beats Rock.");
  } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
    console.log("You win! Scissors beats Paper.");
  } else if(humanChoice === 'rock' && computerChoice === 'scissors'){
    console.log("You win! Rock beats Scissors.")
  } else if (humanChoice === 'rock' && computerChoice === 'rock'){
    console.log("Tie!");
  } else if(humanChoice === 'paper' && computerChoice === 'paper'){
    console.log("Tie!");
  } else if (humanChoice === 'scissors' && computerChoice === 'scissors'){
    console.log("Tie!")
  } 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
/* current issue: getHumanChoice and getComputerChoice are receiving a type error:
"not a function".this is likely due to scope. I will need to resolve it */

console.log(playRound(humanSelection, computerSelection));
