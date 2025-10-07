/* write a function that randonly returns
"rock", "paper", or "scissors". */

function getComputerChoice() {
  const randomNumber = Math.random();
  let computerMove = ' ';
  
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'scissors';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'paper';
  }
  return computerMove;
}
console.log(getComputerChoice( ));

/* write the logic to get the human choice.
Write a function that takes the user choice 
and returns it */

function getHumanChoice () {
  let humanChoice = window.prompt('please pick: rock, paper, or scissors');
  let userChoice = ' ';

  if (humanChoice === 'rock') {
    userChoice = 'rock';
  } else if (humanChoice === 'paper') {
    userChoice = 'paper';
  } else if (humanChoice === 'scissors') {
    userChoice = 'scissors';
  }
   return userChoice;
}
/* console.log(typeof getHumanChoice()); This helped me discovery that my getHumanChoice 
function is being treated as a string */

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

//step 1: create the logic for who wins and looses  
/* try to condense the code because you need two perspectives: the signs 
that win and the signs that loose. maybe try nesting */
//work on case sensitivity (make humanChoice insensitive)
//increment the score based on the winner. might try using a loop for 5 rounds 

function playRound (humanChoice, computerChoice){
  
} 




/* current issue: getHumanChoice and getComputerChoice are receiving a type error:
"not a function".this is likely due to scope. I will need to resolve it */


