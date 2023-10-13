
const playerButtons = document.querySelectorAll('button');
const container = document.querySelector('.container');
// we use the .forEach method to iterate through each button
playerButtons.forEach((button) => {
  // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        var computerSelection = getComputerChoice()
        var result = playRound(button.id, computerSelection);

        const content = document.createElement('div');
        content.classList.add('result');
        
        content.innerHTML = "Your Selection: " + button.id  + "<br> Computer Selection: " + computerSelection + "<br> " + result;
        container.appendChild(content);
        
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