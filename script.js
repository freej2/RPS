let humanScore = 0;
let computerScore = 0;

const gameButtons = document.getElementById("game-buttons");
const resultDiv = document.getElementById("result");

gameButtons.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const humanChoice = event.target.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        resultDiv.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
    }
});

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
             (humanChoice === "paper" && computerChoice === "rock") ||
             (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
    }
    else {
        computerScore++;
    }

    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "You" : "Computer";
        resultDiv.textContent = `Game Over! ${winner} won! Final Score - You: ${humanScore}, Computer: ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    }
}