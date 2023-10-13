
const playerButtons = document.querySelectorAll('.choice');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');
const gameResult = document.querySelector('.result');

playerButtons.forEach((img) => {
    img.addEventListener('click', () => {
        var computerSelection = getComputerChoice()
        var result = playRound(img.id, computerSelection);

        if (img.id === 'rock'){
            playerChoice.innerHTML = '<img class="choice" id="rock" src="images/rock-icon.png" width="30px" height="auto">';
        } else if (img.id === 'paper'){
            playerChoice.innerHTML = '<img class="choice" id="paper" src="images/paper-icon.png" width="30px" height="auto">';
        } else {
            playerChoice.innerHTML = '<img class="choice" id="scissors" src="images/scissors-icon.png" width="30px" height="auto">';
        }

        if (computerSelection === 'rock'){
            computerChoice.innerHTML = '<img class="choice" id="rock" src="images/rock-icon.png" width="30px" height="auto">';
        } else if (computerSelection === 'paper'){
            computerChoice.innerHTML = '<img class="choice" id="paper" src="images/paper-icon.png" width="30px" height="auto">';
        } else {
            computerChoice.innerHTML = '<img class="choice" id="scissors" src="images/scissors-icon.png" width="30px" height="auto">';
        }

        gameResult.innerHTML = result;
        
    });
});




function getComputerChoice () {
    const options = ["rock", "paper", "scissors"]
    let randomNum = Math.floor(Math.random() * 3)
    return options[randomNum];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            return "You Lose! <br> Paper beats Rock!"
        } else if (computerSelection == "scissors"){
            return "You Win! <br> Rock beats Scissors!"
        }
    }else if (playerSelection == "scissors") {
        if (computerSelection == "paper"){
            return "You Win! <br> Scissors beats Paper!"
        } else if (computerSelection == "rock"){
            return "You Lose! <br> Rock beats Scissors!"
        }
    } else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            return "You Win! <br> Paper beats Rock!"
        } else if (computerSelection == "scissors"){
            return "You Lose! <br> Scissors beats Paper!"
        }
    } 
    return "Tie!"
    
}


// function game (){
//     //for (let i = 1; i <= 5; i ++){
//         let playerSelection = window.prompt("Choose one: Rock, Paper, or Scissors").toLowerCase();
//         let computerSelection = getComputerChoice()
//         console.log("Game " + i + "\n") 
//         console.log("Your Selection: " + playerSelection + " \n" + "Computer Selection: " + computerSelection)
//         console.log(playRound(playerSelection, computerSelection))
//     //}
// }

// game()