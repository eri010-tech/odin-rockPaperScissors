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


// loop through the btnContainer and attach an eventListener to each button

btnContainer.forEach((button) => {
  button.addEventListener('click', (e) => {

     let humanChoice = e.target.textContent; 
     userPicked.textContent = humanChoice; 
    
    let computerMove = computerChoice(); 
    computerPicked.textContent = computerMove; 


    let roundWinner = playRound(humanChoice, computerMove); 
   
    updateScore(roundWinner); 


   //next I need make it so that a game end after one person 
   // gets 5 points. After, maybe create a div that says: game over.
   // then I want the score board to restart over. 
  });
});

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
    winner.textContent = "Computer";
  } else if (humanScore === 5){
    winner.textContent = "Player"; 
  }
};
 





 



/* When a button is clicked, a comparison should be made 
between the user's choice and the computer's choice.
Once the comparison has been made, it should 
continue for 4 more rounds. Finally, the score
should be printed */ 

