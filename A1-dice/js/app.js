

//texts

//Data
let playerRoll = 0;

//Buttons
botton = addEventListener("click", function(){
  getRandomNumberForPlayer();
});


//controllers
function getRandomNumberForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}

//views
function play() {}
