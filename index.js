// ####### revisiting project ######### //

// creating variables for each button
const buttons = document.querySelectorAll("#rps-button"); 
//const btnContainer = document.querySelectorAll("#btn-container"); 
const playerPicked = document.querySelector("#player-picked");
const computerPicked = document.querySelector("#computer-picked");
const scoreContainer = document.querySelector("#score-container")
const winner = document.querySelector("#winner"); 
let playerScore = document.querySelector("#player-score"); 
let opponentScore = document.querySelector("#computer-score");
let resetBtn = document.querySelector("#reset-game"); 


// loop through the btnContainer and attach an eventListener to each button

buttons.forEach((button) => button.addEventListener('click', playGame)); 
  
  function playGame(e) {
    let humanChoice = e.target.textContent; 
     playerPicked.textContent = humanChoice; 
    
    let computerMove = computerChoice(); 
    computerPicked.textContent = computerMove; 

    let roundWinner = playRound(humanChoice, computerMove); 
   
    updateScore(roundWinner); 
  }; 


function computerChoice() {
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
};

// Revised playRound using solution from Stack Overflow
 
function playRound (playerSelection, computerSelection){

  let roundWinner = " "; 

  if(playerSelection === computerSelection) {
    roundWinner = "tie"; 
  }
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    roundWinner = "player"; 
  }
  else {
    roundWinner = "computer"; 
  }
    
  return roundWinner; 
};


  let computerScore = 0; 
  let humanScore = 0;  

function updateScore (currentRoundWinner){
  if(currentRoundWinner === "player"){
    humanScore++; 
  } else if (currentRoundWinner === "computer"){
    computerScore++; 
  } 
  playerScore.textContent = humanScore;
  opponentScore.textContent = computerScore; 

  if(computerScore === 5){
    winner.textContent = `Computer won! Please press the Reset button 
    to start a new game.`;  
    buttons.forEach((button) => button.removeEventListener('click', playGame)); 
  } else if (humanScore === 5){
    winner.textContent = `You won! Please press the Reset button to 
    start a new game.`; 
   buttons.forEach((button) => button.removeEventListener('click', playGame)); 
  } 
};
 
resetBtn.addEventListener("click", () => {
  playerScore.textContent = 0;
  opponentScore.textContent = 0;
  humanScore = 0; 
  computerScore = 0; 
  playerPicked.textContent = "";
  computerPicked.textContent = ""; 
  winner.textContent = "";
  buttons.forEach((button) => button.addEventListener('click', playGame));
});



/* When a button is clicked, a comparison should be made 
between the user's choice and the computer's choice.
Once the comparison has been made, it should 
continue for 4 more rounds. Finally, the score
should be printed */ 

   



