const playerButtons = document.querySelectorAll(".choice");
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const gameResult = document.querySelector(".result");
let playerScore = document.querySelector(".left-player-score");
let computerScore = document.querySelector(".right-player-score");
const gameModes = document.querySelectorAll(".game-mode-button");

function resetScores (){
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    gameResult.innerHTML = "";
    playerChoice.innerHTML = "";
    computerChoice.innerHTML = "";
}


playerButtons.forEach((img) => {
    img.addEventListener("click", () => {
        var computerSelection = getComputerChoice();
        var result = playRound(img.id, computerSelection);
        updateResult(img.id, computerSelection, result);
        if (gameOver()){
            if (parseInt(playerScore.innerHTML) === 3){
                alert("You Win!");
            } else {
                alert("You Lose!");
            }
            resetScores();
        }
    });
});

function updateResult (pChoice, cChoice, roundResult){
    if (pChoice === "rock") {
        playerChoice.innerHTML = '<img class="choice" id="rock" src="images/rock-icon.png" width="30px" height="auto">';
    } else if (pChoice === "paper") {
        playerChoice.innerHTML = '<img class="choice" id="paper" src="images/paper-icon.png" width="30px" height="auto">';
    } else {
        playerChoice.innerHTML = '<img class="choice" id="scissors" src="images/scissors-icon.png" width="30px" height="auto">';
    }

    if (cChoice === "rock") {
        computerChoice.innerHTML = '<img class="choice" id="rock" src="images/rock-icon.png" width="30px" height="auto">';
    } else if (cChoice === "paper") {
        computerChoice.innerHTML = '<img class="choice" id="paper" src="images/paper-icon.png" width="30px" height="auto">';
    } else {
        computerChoice.innerHTML = '<img class="choice" id="scissors" src="images/scissors-icon.png" width="30px" height="auto">';
    }

    gameResult.innerHTML = roundResult;
}
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return options[randomNum];
}

function playRound(playerSelection, computerSelection) {
  let result = "";
  console.log(playerSelection + " " + computerSelection);
  if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      result = "You Lose! <br> Paper beats Rock!";
      computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
    } else if (computerSelection == "scissors") {
      result = "You Win! <br> Rock beats Scissors!";
      playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
    } else {
      result = "Tie!";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      result = "You Win! <br> Scissors beats Paper!";
      playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
    } else if (computerSelection == "rock") {
      result = "You Lose! <br> Rock beats Scissors!";
      computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
    } else {
        result = "Tie!";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      result = "You Win! <br> Paper beats Rock!";
      playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
    } else if (computerSelection == "scissors") {
      result = "You Lose! <br> Scissors beats Paper!";
      computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
    } else {
        result = "Tie!";
    }
  }
  return result;
}

function gameOver (){
    if (parseInt(playerScore.innerHTML) === 3 || parseInt(computerScore.innerHTML) === 3){
        return true;
    } 
    return false;
}
