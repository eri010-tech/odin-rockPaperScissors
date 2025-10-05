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
function getHumanChoice (){
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
    

