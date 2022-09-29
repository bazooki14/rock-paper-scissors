const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
    
    playerSelection = prompt( "Rock, paper, or scissors?").toLowerCase();
    computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
        return "Draw";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper covers rock!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors cut paper!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors cut paper!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper covers rock!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors!"
}

};

