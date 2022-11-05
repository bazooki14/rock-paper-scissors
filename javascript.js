const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let status;

function playRound(playerSelection, computerSelection) {
    
    playerSelection = prompt( "Rock, paper, or scissors?").toLowerCase();
    computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
        return "Draw";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock beats scissors!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper covers rock!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors cut paper!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors cut paper!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper covers rock!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors!"
    } else if (playerSelection === null || playerSelection === undefined || playerSelection === "") {
        status = "Cancelled";
        alert("Cancelled");
    } else {
        alert("Please enter rock, paper, or scissors");
    };

};

function game() {
    alert("Best of 5");

    status = "started";

    
    
    if (computerScore > playerScore) {
        console.log("You lost the game. The score was " + playerScore + "-" + computerScore);
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore > computerScore) {
        console.log("You won the game! The score was " + playerScore + "-" + computerScore);
        playerScore = 0;
        computerScore = 0;
    } else {
        console.log("You cancelled the game.");
        playerScore = 0;
        computerScore = 0;
    }
}