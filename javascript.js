const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let status;

let div = document.querySelector('div');
let result = document.createElement('p');
div.appendChild(result);

let pScoreBox = document.querySelector('.player');
let pScore = document.createElement('p');
pScoreBox.appendChild(pScore);
pScore.textContent = playerScore;

let cScoreBox = document.querySelector('.computer');
let cScore = document.createElement('p');
cScoreBox.appendChild(cScore);
cScore.textContent = computerScore;

let rock = document.querySelector('.rock');
rock.addEventListener('click', function(e) {
    playRound("rock");
});

let paper = document.querySelector('.paper');
paper.addEventListener('click', function(e) {
    playRound("paper");
});

let scissors = document.querySelector('.scissors');
scissors.addEventListener('click', function(e) {
    playRound("scissors");
});

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        cScore.textContent = computerScore;
        pScore.textContent = playerScore;

    })
})

function playRound(playerSelection, computerSelection) {
    
    computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
        result.textContent = "Draw";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        result.textContent = "You win! Rock beats scissors!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        result.textContent = "You win! Paper covers rock!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        result.textContent = "You win! Scissors cut paper!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        result.textContent = "You lose! Scissors cut paper!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        result.textContent = "You lose! Paper covers rock!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        result.textContent = "You lose! Rock beats scissors!"
    }
    
    checkStatus();
};

    
function checkStatus() {
    if (playerScore === 5 || computerScore === 5) {
        if (computerScore > playerScore) {
            result.textContent = "You lost the game. The score was " + playerScore + "-" + computerScore;
            playerScore = 0;
            computerScore = 0;
        } else if (playerScore > computerScore) {
            result.textContent = "You won the game! The score was " + playerScore + "-" + computerScore;
            playerScore = 0;
            computerScore = 0;
        } else {
            result.textContent = "You cancelled the game.";
            playerScore = 0;
            computerScore = 0;
        };
    };

};