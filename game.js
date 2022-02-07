var buttonColours = ["red", "yellow", "blue", "green"];
var randomNumber, randomChosenColour, userChosenColor, level=0, started;
var gamePattern = [];
var userClickedPattern = [];
var redAudio = new Audio("sounds/red.mp3");
var blueAudio = new Audio("sounds/blue.mp3");
var greenAudio = new Audio("sounds/green.mp3");
var yellowAudio = new Audio("sounds/yellow.mp3");
var wrongAudio = new Audio("sounds/wrong.mp3");

//start over function
function startOver(){
  level=0;
  gamePattern=[];
  started=false;
}

//Game start
$(document).on("keypress", function(){
  if(!started){
    $("#level-title").text("Level "+level);
    nextSequence();
    started=true;
    //console.log("working");
  }

})

//animatePress()
function animatePress(currentColor){
  $("."+currentColor).addClass("pressed");
  const timeout = setTimeout(function(){
    $("."+currentColor).removeClass("pressed");
  }, 200);
  //console.log("working");
}

//playSound
function playSound(name){
  switch(name){
    case "red":
    redAudio.play();
    break;
    case "blue":
    blueAudio.play();
    break;
    case "green":
    greenAudio.play();
    break;
    case "yellow":
    yellowAudio.play();
    break;
    default:
    console.log("Error");
  }
}

//hanlding user input
$(".btn").on("click", function(event){
  userChosenColor=event.target.id;
  playSound(userChosenColor);
  animatePress(userChosenColor);
  userClickedPattern.push(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
  //console.log(userClickedPattern);
});

//generates next sequence
function nextSequence(){
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level "+level);
  randomNumber=Math.floor(Math.random()*4);
  randomChosenColour=buttonColours[randomNumber];
  $("."+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  gamePattern.push(randomChosenColour);

}

//check answer
function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
    if(userClickedPattern.length === gamePattern.length){
      console.log("success");
      const timeout = setTimeout(nextSequence(), 3000);
    }
  }
  else{
    wrongAudio.play();
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    const timeout = setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    startOver();
    console.log("wrong");
  }
}
