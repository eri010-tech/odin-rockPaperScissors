
//step 1: create the logic for who wins and looses  
// try to condense the code -- maybe try nesting 
//increment the score based on the winner. might try using a loop for 5 rounds 

function playRound (playerChoice, computerChoice){

  if(playerChoice === 'rock'){
    if(computerChoice === 'rock'){
      return 'Tie.';
    } else if (computerChoice === 'paper'){
      computerScore++;
      return 'You lose! Paper beats Rock';
    } else if (computerChoice === 'scissors'){
      userScore++;
      return 'You Win! Rock beats Scissors';
    }
  } else if (playerChoice === 'paper'){
    if(computerChoice === 'rock'){
      userScore++;
      return 'You Win! Paper beats Rock';
    } else if (computerChoice === 'paper'){
      return 'Tie.';
    } else if (computerChoice === 'scissors'){
      computerScore++;
      return 'You lose. Scissors beats Paper';
    }
  } else if (playerChoice === 'scissors'){
    if (computerChoice === 'rock'){
      computerScore++;
      return 'You lose. Rock beats Scissors';
    } else if (computerChoice === 'paper'){
      userScore++;
      return 'You Win! Scissors beats Paper';
    } else if (computerChoice === 'scissors'){
      return 'Tie.';
    }
  }
} 

//let userScore = parseInt(0);
//let computerScore = parseInt(0);

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();
//console.log(playRound(humanSelection, computerSelection));

//console.log(humanSelection);
//console.log(computerSelection);
//console.log(userScore);
//console.log(computerScore);
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


// revisiting project //

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
     userPicked.textContent = humanChoice.toLowerCase(); 

    
    let computerMove = computerChoice(); 
    computerPicked.textContent = computerMove; 

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

