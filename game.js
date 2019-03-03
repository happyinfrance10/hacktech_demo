//Define main game model. Update this model to update game state.
var model = {
    //Denotes whether the game is in loading screen, gameplay, etc.
    gameState: 0,
    //In game parameters
    hoursLeft: 2160,
    energy: 1000,
    happiness: 500,
    coding: 0,
    resume: 0,
    personality: 0,
    connections: 0
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

function pass_resume_screening(coding, resume, personality, wit, difficulty){
  let score = coding*.2 + resume * .5 + personality *.15 + wit * .15;
   return (score > 900);
}

function startGame() {
    if (model.gameState === 0) {
        $("#loadscreen").css("display", "none");
        $("#gui").css("display", "flex");
        $(".wrapper").css("display", "block");
        $("body").css("background-color", "white");
        model.gameState = 1;
        draw();
    }
}
$(document).click(startGame);

//Example code - define function to update model, then bind model to button
//click event
function button1() {    //leetcode
    model.hoursLeft -= 3;
    model.coding +=10;
    model.energy -=125;
    model.happiness -=25;
    checkVariables();
    //Update game logic here
}
$("#button1").click(button1);

function button2() {
    model.hoursLeft -= 3;
    model.connections +=20;
    model.personality +=10;
    model.energy -=50;
    model.happiness -=20;
    checkVariables();
    //Update game logic here
}
$("#button2").click(button2);

function button3() {  //nap
    model.hoursLeft -= 3;
    model.energy +=500;
    checkVariables();
    //Update game logic here
}
$("#button3").click(button3);

function button4() {    //project
    model.hoursLeft -= 6;
    model.coding +=5;
    model.resume +=15;
    model.happiness -=50;
    model.energy -=200;
    checkVariables();
    //Update game logic here
}
$("#button4").click(button4);

function button5() {    //friend
    model.hoursLeft -= 3;
    model.happiness +=500;
    model.personality +=5;
    model.energy +=75;
    checkVariables();
    //Update game logic here
}
$("#button5").click(button5);

$(".button").click(draw);

function draw() {
    console.log("meme");
    $("#coding").text(formatScore(model.coding));
    $("#resume").text(formatScore(model.resume));
    $("#personality").text(formatScore(model.personality));
    $("#connections").text(formatScore(model.connections));
    $("#happiness").text(formatScore(model.happiness));
    $("#energy").text(formatScore(model.energy));
    $("#time").text(model.hoursLeft + "/2160 hours remain.");
}

function formatScore(num) {
    if (num > 1000) {
        num = 1000;
    }
    return (num + "/1000 (" + (num / 1000).toFixed(2) * 100 + "%)");
}

function checkVariables(){
  if (model.coding > 1000) {
      model.coding = 1000;
  }
  if (model.resume > 1000) {
      model.resume = 1000;
  }
  if (model.personality > 1000) {
      model.personality = 1000;
  }
  if (model.connections > 1000) {
      model.connections = 1000;
  }
  if (model.happiness > 1000) {
      model.happiness = 1000;
  }
  if (model.energy > 1000) {
      model.energy = 1000;
  }
  if (model.energy <= 0) {
    //burnt out --> cannot do anything but rest
    model.energy = 0;
  }
  if (model.hoursLeft === 0) {
    //game over stuff: if past a certain level, say congrats.
    //
  }
}

$(document).click(draw);
