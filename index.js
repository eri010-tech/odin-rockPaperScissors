// ####### revisiting project ######### //

// creating variables for each button
const buttons = document.querySelectorAll("button"); 
const btnContainer = document.querySelectorAll("#btn-container");
const userPicked = document.querySelector("#user-picked");
const computerPicked = document.querySelector("#computer-picked");
const scoreContainer = document.querySelector("#score-container")
const winner = document.querySelector("#winner"); 
let yourScore = document.querySelector("#player-score"); 
let opponentScore = document.querySelector("#computer-score");
let resetBtn = document.querySelector("#reset-game"); 


// loop through the btnContainer and attach an eventListener to each button

btnContainer.forEach((button) => button.addEventListener('click', playGame)); 
  
  function playGame(e) {
    let humanChoice = e.target.textContent; 
     userPicked.textContent = humanChoice; 
    
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
  yourScore.textContent = humanScore;
  opponentScore.textContent = computerScore; 

  if(computerScore === 5){
    winner.textContent = `Computer won! Please press the Reset Button 
    to start a new game.`;  
    btnContainer.forEach((button) => button.removeEventListener('click', playGame)); 
  } else if (humanScore === 5){
    winner.textContent = `You won! Please press the Reset Button to 
    start a new game.`; 
   btnContainer.forEach((button) => button.removeEventListener('click', playGame)); 
  } 
};
 
resetBtn.addEventListener("click", () => {
  yourScore.textContent = 0;
  opponentScore.textContent = 0;
  humanScore = 0; 
  computerScore = 0; 
  userPicked.textContent = "";
  computerPicked.textContent = ""; 
  winner.textContent = "";
  btnContainer.forEach((button) => button.addEventListener('click', playGame));
});



/* new task: after 5 points is earned
I want the each of the three buttons, w
when clicked again to essentially behave
like my reset button, and start the game
over. Then, when the user tries to click 
one of the three buttons again, it allows
them to play a new Game */ 




/* When a button is clicked, a comparison should be made 
between the user's choice and the computer's choice.
Once the comparison has been made, it should 
continue for 4 more rounds. Finally, the score
should be printed */ 

   



