//Define main game model. Update this model to update game state.
var model = {
    //Denotes whether the game is in loading screen, gameplay, etc.
    gameState: 0,
    //In game parameters
    hoursLeft: 2160,
    energy: 0,
    coding: 0,
    resume: 0,
    personality: 0,
    wit: 0
}

var pass_resume_screening = function(coding, resume, personality, wit, difficulty){
  let score = coding*.2 + resume * .5 + personality *.15 + wit * .15;
   return (score > 900);
}

//Change gamestate when screen is clicked
$(document).click(startGame);
function startGame() {
    if (model.gameState === 0) {
        $("#loadscreen").css("display", "none");
        $("#gui").css("display", "flex");
        model.gameState = 1;
    }
}

//Example code - define function to update model, then bind model to button
//click event
function button1() {
    //Update game logic here
}
$("#button1").click(button1)

function draw() {
    //Draw in game GUI here
}

//Update game graphics every second?
//TODO: Perhaps only update game graphics when necessary
setInterval(draw, 1000);
