// VARIABLES
// Buttons
let button0: HTMLElement = document.getElementById("button0");

// Texts
let playerRollText: HTMLElement = document.getElementById("playerRollText");

// Data
let playerRoll: number = 0;

// PROCESSES
button0.addEventListener("click", function (): void {
  getRandomNumberOneToSixForPlayer();
  showPlayerRollResult();
});

// CONTROLLERS
function getRandomNumberOneToSixForPlayer(): void {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}

// VIEWS
function showPlayerRollResult(): void {
  playerRollText.innerHTML = playerRoll;
}


