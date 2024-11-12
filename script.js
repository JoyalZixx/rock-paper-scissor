let humanScore = 0;
let computerScore = 0;
let humanAnswer;
let computerAnswer;

document.getElementById("rock").addEventListener('click', function() {
    getHumanChoice("rock");
});

document.getElementById("paper").addEventListener('click', function() {
    getHumanChoice("paper");
});

document.getElementById("scissors").addEventListener('click', function() {
    getHumanChoice("scissors");
});

function getHumanChoice(choice) {
    humanAnswer = choice;
    getComputerChoice();
    console.log(computerAnswer);        
    playRound(humanAnswer, computerAnswer);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerAnswer = choices[randomIndex];
    return computerAnswer;
}
function playRound(humanAnswer, computerAnswer) {
    let result = "";
    if (humanAnswer == "rock" && computerAnswer == "paper") {
        result = "Paper beats Rock, Computer Wins!!";
        computerScore++;
    } else if (humanAnswer == "rock" && computerAnswer == "scissors") {
        result = 'You WIN!!';
        humanScore++;
    } else if (humanAnswer == "paper" && computerAnswer == "scissors") {
        result = 'Computer WINS!!';
        computerScore++;
    } else if (humanAnswer == "paper" && computerAnswer == "rock") {
        result = 'You WIN!!';
        humanScore++;
    } else if (humanAnswer == "scissors" && computerAnswer == "rock") {
        result = 'Computer WINS!!';
        computerScore++;
    } else if (humanAnswer == "scissors" && computerAnswer == "paper") {
        result = 'You WIN!!';
        humanScore++;
    } else if (humanAnswer == "rock" && computerAnswer == "rock") {
        result = 'Its a tie';
    } else if (humanAnswer == "paper" && computerAnswer == "paper") {
        result = 'Its a tie';
    } else if (humanAnswer == "scissors" && computerAnswer == "scissors") {
        result = 'Its a tie';
    }
    document.getElementById("answer").innerHTML = result;
    document.getElementById("humanScore").innerHTML = "Human Score: " + humanScore;
    document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;
}
