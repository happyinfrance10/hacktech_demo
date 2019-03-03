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

function pass_resume_screening(coding, resume, personality, connections){
  let score = coding*.2 + resume * .4 + personality *.1 + connections * .3;
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
  if(model.energy-150>=0 && model.happiness-25>=0 && model.hoursLeft-3>=0){
    model.hoursLeft -= 3;
    model.coding +=(Math.floor(Math.random() * 5)+2);
    model.energy -=150;
    model.happiness -=25;
    checkVariables();
    //Update game logic here
  } else if (model.hoursLeft-3<0){
    document.getElementById("status").innerHTML = "You have no time to do this! Choose another task!";
  } else if (model.happiness-25<0){
    document.getElementById("status").innerHTML = "Spending too much time on career preparation can be a bad thing...";
  } else {
    document.getElementById("status").innerHTML = "Do you really want to end up too exhausted to be productive soon?";
  }
}
$("#button1").click(button1);

function button2() {
  if(model.energy-50>=0 && model.happiness-20>=0 && model.hoursLeft-3>=0){
    model.hoursLeft -= 3;
    model.connections +=(Math.floor(Math.random() * 5)+4);
    model.personality +=(Math.floor(Math.random() * 5));
    model.energy -=50;
    model.happiness -=20;
    checkVariables();
    //Update game logic here
  } else if (model.hoursLeft-3<0){
    document.getElementById("status").innerHTML = "You have no time to do this! Choose another task!";
  } else if (model.happiness-20<0){
    document.getElementById("status").innerHTML = "Spending too much time on career preparation can be a bad thing...";
  } else {
    document.getElementById("status").innerHTML = "Do you really want to end up too exhausted to be productive soon?";
  }
}
$("#button2").click(button2);

function button3() {  //nap
  if(model.hoursLeft-3>=0){
    model.hoursLeft -= 3;
    model.energy +=500;
    checkVariables();
    //Update game logic here
  } else {
      document.getElementById("status").innerHTML = "You have no time to do this! Choose another task!";
  }
}
$("#button3").click(button3);

function button4() {    //project
  if(model.energy-200>=0 && model.happiness-50>=0 && model.hoursLeft-12>=0){
    model.hoursLeft -= 12;
    model.coding +=(Math.floor(Math.random() * 3)+1);
    model.resume +=(Math.floor(Math.random() * 7)+3);
    model.happiness -=50;
    model.energy -=200;
    checkVariables();
    //Update game logic here
  } else if (model.hoursLeft-12<0){
    document.getElementById("status").innerHTML = "You have no time to do this! Choose another task!";
  } else if (model.happiness-50<0){
    document.getElementById("status").innerHTML = "Spending too much time on career preparation can be a bad thing...";
  } else {
    document.getElementById("status").innerHTML = "Do you really want to end up too exhausted to be productive soon?";
  }
}
$("#button4").click(button4);

function button5() {    //friend
  if(model.energy-25>=0 && model.hoursLeft-3>=0){
    model.hoursLeft -= 3;
    model.happiness +=500;
    model.personality +=(Math.floor(Math.random() * 6)+3);
    model.energy -=25;
    checkVariables();
    //Update game logic here
  } else if (model.hoursLeft-3<0){
    document.getElementById("status").innerHTML = "You have no time to do this! Choose another task!";
  } else {
    document.getElementById("status").innerHTML = "Do you really want to end up too exhausted to be productive soon?";
  }
}
$("#button5").click(button5);

$(".button").click(draw);

function draw() {
    $("#coding").text(formatScore(model.coding));
    jss.set(".line1:after", {'max-width': getPercentage(model.coding) + "%"})
    $("#resume").text(formatScore(model.resume));
    jss.set(".line2:after", {'max-width': getPercentage(model.resume) + "%"})
    $("#personality").text(formatScore(model.personality));
    jss.set(".line3:after", {'max-width': getPercentage(model.personality) + "%"})
    $("#connections").text(formatScore(model.connections));
    jss.set(".line4:after", {'max-width': getPercentage(model.connections) + "%"})
    $("#energy").text(formatScore(model.energy));
    jss.set(".line5:after", {'max-width': getPercentage(model.energy) + "%"})
    $("#happiness").text(formatScore(model.happiness));
    jss.set(".line6:after", {'max-width': getPercentage(model.happiness) + "%"})
    $("#time").text(model.hoursLeft + "/2160 hours remain.");
    jss.set(".line7:after", {'max-width': (model.hoursLeft / 2160).toFixed(2) * 100 + "%"})
}

function formatScore(num) {
    if (num > 1000) {
        num = 1000;
    }
    return (num + "/1000 (" + (num / 1000).toFixed(2) * 100 + "%)");
}

function getPercentage(num) {
    return (num / 1000).toFixed(2) * 100
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
    document.getElementById("status").innerHTML = "You've overworked yourself! Get some sleep or you'll burn out!";
    model.energy = 0;
  }
  if (model.happiness<=0){
    document.getElementById("status").innerHTML = "Being a slave to your career will ultimately make you feel stressed. It's important to take some time to have a work-life balance.";
    model.happiness = 0;

  }
  if(model.energy>0 && model.happiness>0){
    document.getElementById("status").innerHTML = "";
  }
  if (model.hoursLeft === 0) {
    //game over stuff: if past a certain level, say congrats.
    //
    console.log("MVP");
    if(pass_resume_screening(model.coding, model.resume, model.personality, model.connections)){
      document.getElementById("status").innerHTML = "Time's up! You have worked very hard to become successful, and your efforts paid off with a job offer! Refresh to play again.";
    } else {
      document.getElementById("status").innerHTML = "Time's up! Unfortunately, things have not been kind to you in this life; recruitment was not very successful for you. Refresh to play again.";
    }
  }
}

$(document).click(draw);
