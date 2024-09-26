// VARIABLES
let win = 0;
let loss = 0;
let draw = 0;

// Buttons
const button0 = document.getElementById("button0");

// Texts
const playerRollText = document.getElementById("playerRollText");
const aiRollText = document.getElementById("aiRollText");
const winText = document.getElementById("Win");
const lossText = document.getElementById("Loss");
const drawText = document.getElementById("Draw");

// Data
let playerRoll = 0;
let aiRoll = 0;

// PROCESSES
button0.addEventListener("click", function () {
  getRandomNumberOneToSixForPlayer();
  getRandomNumberOneToSixForAi();
  calculateResult();
});

// CONTROLLERS
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
  showPlayerRollResult();
}

function getRandomNumberOneToSixForAi() {
  aiRoll = Math.floor(Math.random() * 6) + 1;
  showAiRollResult();
}

function calculateResult(){
  if (playerRoll > aiRoll) {
    win++;
  } else if (aiRoll > playerRoll) {
    loss++;
  } else {
    draw++;
  }
  scoreVisual();
}

function scoreVisual(){
  winText.innerHTML = "You win: " + win;
  lossText.innerHTML = "You lose: " + loss;
  drawText.innerHTML = "You draw: " + draw;
}

// VIEWS
function showPlayerRollResult() {
  playerRollText.innerHTML = "Player Rolled = " + playerRoll;
}

function showAiRollResult() {
  aiRollText.innerHTML = "AI Rolled = " + aiRoll;
}

document.cookie = "username = Dill doe; expires=Thu, 29 sep 2024 :00:00 UTC; path=/";

