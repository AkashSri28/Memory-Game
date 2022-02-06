var buttonColours = ["red", "yellow", "blue", "green"];
var randomNumber, randomChosenColour, userChosenColor;
var gamePattern = [];
var userClickedPattern = [];
var redAudio = new Audio("sounds/red.mp3");
var blueAudio = new Audio("sounds/blue.mp3");
var greenAudio = new Audio("sounds/green.mp3");
var yellowAudio = new Audio("sounds/yellow.mp3");

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
  userClickedPattern.push(userChosenColor);
  //console.log(userClickedPattern);
});

//generates next sequence
function nextSequence(){
  randomNumber=Math.floor(Math.random()*4);
  randomChosenColour=buttonColours[randomNumber];
  $("."+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  gamePattern.push(randomChosenColour);
}
