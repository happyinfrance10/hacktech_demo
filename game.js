//Define main game model. Update this model to update game state.
var model = {
    //Denotes whether the game is in loading screen, gameplay, etc.
    gameState: 0,
    //In game parameters
    hoursLeft: 0,
    energy: 0,
    coding: 0,
    resume: 0,
    personality: 0,
    wit: 0
}

//Example code - define function to update model, then bind model to button
//click event
function button1() {
    //Update game logic here
}
$("#buttonone").click(button1)

function draw() {
    //Draw in game GUI here
}

//Update game graphics every second?
//TODO: Perhaps only update game graphics when necessary
setInterval(draw, 1000);
