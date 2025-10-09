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

/* write the logic to get the human choice.
Write a function that takes the user choice 
and returns it */

function getHumanChoice () {
  let humanOption = window.prompt('please pick: rock, paper, or scissors');
  let userChoice = ' ';

  if (humanOption.toLowerCase() === 'rock') {
    userChoice = 'rock';
  } else if (humanOption.toLowerCase() === 'paper') {
    userChoice = 'paper';
  } else if (humanOption.toLowerCase() === 'scissors') {
    userChoice = 'scissors';
  }
   return userChoice;
}

//step 1: create the logic for who wins and looses  
// try to condense the code -- maybe try nesting 
//increment the score based on the winner. might try using a loop for 5 rounds 
  let humanScore = 0;
  let computerScore = 0;

function playRound (humanChoice, computerChoice){

  let result = '';
   
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
  } else if (humanChoice === 'scissors'){
    if (computerChoice === 'rock'){
      result = 'You lose.';
    } else if (computerChoice === 'paper'){
      result = 'You Win!';
    } else if (computerChoice === 'scissors'){
      result = 'Tie.';
    }
  }

      if (result === 'You Win!') {
          humanScore = humanScore + 1;
        } else if (result === 'You lose.'){ 
          computerScore = computerScore + 1;
        }
  return result;
} 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));

console.log(humanSelection);
console.log(computerSelection);
console.log(humanScore);
console.log(computerScore);














