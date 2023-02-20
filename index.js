const compImg = document.getElementById("compIcon");
const resultElement = document.getElementById("result");
const userScoreElement = document.getElementById("userScore");
const CompScoreElement = document.getElementById("computerScore");
let userScore = 0;
let compScore = 0;
const obj = {
  0: "rock",
  1: "paper",
  2: "scissors",
};
const map = new Map([
  ["rock", 0],
  ["paper", 1],
  ["scissors", 2],
]);
function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3);
  return obj[rand];
}

function runRound(userChoice) {
  const computerChoice = getComputerChoice();
  compImg.src = "images/" + computerChoice + ".svg";
  const userNum = map.get(userChoice);
  const compNum = map.get(computerChoice);
  //   Check Winner
  if (userNum === compNum) resultElement.textContent = `Draw`;
  else if ((userNum + 1) % 3 === compNum) {
    resultElement.textContent = `You Lose`;
    compScore++;
  } else if ((userNum + 2) % 3 === compNum) {
    resultElement.textContent = `You Win`;
    userScore++;
  }
  //   Display score
  userScoreElement.textContent = userScore;
  CompScoreElement.textContent = compScore;
  //   If game over
  if (userScore === 5) {
    document.body.innerHTML = `<h1 class = "middle">YOU WIN</h1>`;
  }
  if (compScore === 5) {
    document.body.innerHTML = `<h1 class = "middle">Computer WIN</h1>`;
  }
}
//get clicks
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("rock")) runRound("rock");
  else if (e.target.classList.contains("paper")) runRound("paper");
  else if (e.target.classList.contains("scissors")) runRound("scissors");
});
