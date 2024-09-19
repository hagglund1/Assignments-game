// VARIABLES


// Buttons
const button0 = document.getElementById("button0"); // Ingen typdefiniering behövs i vanlig JS

// Texts
const playerRollText = document.getElementById("playerRollText"); // Ingen typdefiniering här heller
const aiRollText = document.getElementById("aiRollText");

// Data
let playerRoll = 0;
let aiRoll = 0;

// PROCESSES
button0.addEventListener("click", function () {
  getRandomNumberOneToSixForPlayer();
  showPlayerRollResult();

  button0.addEventListener("click", function () {
    getRandomNumberOneToSixForPlayer();
    showPlayerRollResult();

});

// CONTROLLERS
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1; // Genererar ett nummer mellan 1 och 6
}
function
aiRoll = Math.floor(Math.random() * 6) + 1;

// VIEWS
function showPlayerRollResult() {
  playerRollText.innerHTML = playerRoll.toString(); // Konverterar talet till sträng för säkerhets skull
}
  function aiRollResult (){
  aiRollText.innerHTML = aiRoll.toString();
  }


