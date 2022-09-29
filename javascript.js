const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

const playerSelection = prompt( "Rock, paper, or scissors?").toLowerCase();
const computerSelection = getComputerChoice();
