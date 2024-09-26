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


// Cookie management
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2025 12:00:00 UTC"

let playerScore = 0;
let aiScore = 0;

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function saveAsCookie() {
  document.cookie = "playerScoreHistory=" +
    playerScoreHistory + ";expires=Thu, 18 Dec 2025 12:00:00UTC";
  document.cookie = "computerScoreHistory=" +
    computerScoreHistory + ";expires=Thu, 18 Dec 2025 12:00:00UTC";
}
let previousPlayerScore = getCookie("playerScoreHistory");
let previousComputerScore = getCookie("computerScoreHistory");



if (previousPlayerScore != null) {

}if (previousComputerScore != null) {

}

if (previousPlayerScore != null) {
  playerScoreHistory.push(previousPlayerScore);
  playerHistory.innerHTML = previousPlayerScore;
}
if (previousComputerScore != null) {
  computerScoreHistory.push(previousComputerScore);
  computerHistory.innerHTML = previousComputerScore;
}





