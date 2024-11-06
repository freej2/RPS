let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    console.log(randomIndex);
    if (randomIndex === 0) {
        return "rock";
    } else if (randomIndex === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Enter your choice: rock, paper, or scissors");
    return humanChoice.toLowerCase();
}
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
             (humanChoice === "paper" && computerChoice === "rock") ||
             (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log("You win!");
    }
    else {
        computerScore++;
        console.log("You lose!");
    }
}
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);  
    }
    console.log("Final score: Human: " + humanScore + " Computer: " + computerScore);  
}

playGame();