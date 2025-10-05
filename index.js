/* write a function that randonly returns
"rock", "paper", or "scissors". */


function getComputerChoice() {
  const randomNumber = Math.random();
  
  if (randomNumber >= 0 && randomNumber < 1/3) {
    getComputerChoice = 'scissors';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    getComputerChoice = 'rock';
  } else if (randomNumber >= 2/3 && randomNumber < 1)
    getComputerChoice = 'paper';
  
  return getComputerChoice;
}
console.log(getComputerChoice());


   

