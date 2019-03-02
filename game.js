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

function normal_distribution(mean, sd, value){
  let z = (value-mean)/sd;
  if (z < -6.5) {
    return 0.0;
  }

  if (z > 6.5) {
    return 1.0;
  }

  let factK = 1;
  let sum = 0;
  let term = 1;
  let k = 0;
  let loopStop = Math.exp(-23);

  while(Math.abs(term) > loopStop) {
    term = .3989422804 * Math.pow(-1,k) * Math.pow(z,k) / (2 * k + 1) / Math.pow(2,k) * Math.pow(z,k+1) / factK;
    sum += term;
    k++;
    factK *= k;
  }

  sum += 0.5;

  return sum;

}

function pass_resume_screening = function(coding, resume, personality, wit, difficulty){
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
