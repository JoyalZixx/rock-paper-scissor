let humanScore = 0;
let computerScore = 0;
let humanAnswer;

let choice = Math.floor(Math.random() * 3) + 1;

function getComputerChoice() {
    let answer;
    if (choice === 1) {
        answer = "rock";
    } else if (choice === 2) {
        answer = "paper";
    } else if (choice === 3) {
        answer = "scissors";
    }
    return answer;
}
console.log(getComputerChoice());

function getHumanChoice() {
    document.getElementById('rock').addEventListener('click', () => {
        humanAnswer = 1;
        document.getElementById('answer').innerText = "You chose rock";
    });
    document.getElementById('paper').addEventListener('click', () => {
        humanAnswer = 2;
        document.getElementById('answer').innerText = "You chose paper";
    });
    document.getElementById('scissors').addEventListener('click', () => {
        humanAnswer = 3;
        document.getElementById('answer').innerText = "You chose scissors";
    });
}
    
