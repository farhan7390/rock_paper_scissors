console.log("Hello, World!");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const userInput = prompt("Enter rock, paper, or scissors: ").toLocaleLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);

        const human = getHumanChoice();
        const computer = getComputerChoice();

        playRound(human, computer);
        console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    }

    console.log(`Final Score : You ${humanScore} - Computer ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the Game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! You lost the game. Bettter Luck Next Time!");
    } else {
        console.log("It's a tie game!");
    }
}
playGame();