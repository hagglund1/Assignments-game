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

loadScoresFromCookies()
// PROCESSES
button0.addEventListener("click", function () {
  getRandomNumberOneToSixForPlayer();
  getRandomNumberOneToSixForAi();
  calculateResult();
  saveScoresToCookies();
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

function calculateResult() {
  if (playerRoll > aiRoll) {
    win++;
  } else if (aiRoll > playerRoll) {
    loss++;
  } else {
    draw++;
  }
  scoreVisual();
  saveScoresToCookies();
}

function scoreVisual() {
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

// Cookie functions
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function saveScoresToCookies() {
  document.cookie = "win=" + win + "; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
  document.cookie = "loss=" + loss + "; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
  document.cookie = "draw=" + draw + "; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
}

function loadScoresFromCookies() {
  win = Number(getCookie("win")) || 0;
  loss = Number(getCookie("loss")) || 0;
  draw = Number(getCookie("draw")) || 0;

  scoreVisual();

}



