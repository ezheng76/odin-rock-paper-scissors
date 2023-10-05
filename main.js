function getComputerChoice () {
    const options = ["rock", "paper", "scissors"]
    let randomNum = Math.floor(Math.random() * 3)
    return options[randomNum];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            return "You Lose! Paper beats Rock!"
        } else if (computerSelection == "scissors"){
            return "You Win! Rock beats Scissors!"
        }
    }else if (playerSelection == "scissors") {
        if (computerSelection == "paper"){
            return "You Win! Scissors beats Paper!"
        } else if (computerSelection == "rock"){
            return "You Lose! Rock beats Scissors!"
        }
    } else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            return "You Win! Paper beats Rock!"
        } else if (computerSelection == "scissors"){
            return "You Lose! Scissors beats Paper!"
        }
    } 
    return "Tie!"
    
}

const playerSelection = "rock"
const computerSelection = getComputerChoice()
console.log(playerSelection + " - " + computerSelection)
console.log(playRound(playerSelection, computerSelection))