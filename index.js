
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

/*
function playGame(){
  for (let i = 0; i < 5; i++ ){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    alert(`The computer picked: ${computerSelection}`);
    console.log("Your score = " + userScore);
    console.log("Computer's score = " + computerScore);
  }
  if (userScore > computerScore){
    console.log(`You Won! Your final score was: ${userScore}/5`);
  } else if(computerScore > userScore){
    console.log(`You lost. Your final score was: ${userScore}/5. 
    Better luck next time!`);
  }
}
playGame();
*/


// ####### revisiting project ######### //

// creating variables for each button
const buttons = document.querySelectorAll("button"); 
const btnContainer = document.querySelectorAll("#btn-container");
const humanScoreDisplay = document.querySelector("#human-score");
const userPicked = document.querySelector("#user-picked");
const computerPicked = document.querySelector("#computer-picked");
const computerScoreDisplay = document.querySelector("#computer-score");
const winner = document.querySelector("#winner"); 


// loop through the btnContainer and attach an eventListener to each button

btnContainer.forEach((button) => {
  button.addEventListener('click', (e) => {

     let humanChoice = e.target.textContent; 
     userPicked.textContent = humanChoice; 
    
    let computerMove = computerChoice(); 
    computerPicked.textContent = computerMove; 


   let roundWinner = playRound(humanChoice, computerMove); 
   console.log(roundWinner); // says who won the round 
   
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

/* When a button is clicked, a comparison should be made 
between the user's choice and the computer's choice.
Once the comparison has been made, it should 
continue for 4 more rounds. Finally, the score
should be printed */ 

