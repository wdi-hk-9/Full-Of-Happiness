$(document).ready( function(){

//Overall Flow for 1P only

//I. Click start button to begin the game
$("#start-btn").on("click", genBubble);

//II. Generate game object

//III. Generate bubbles

//III. Click bubble to change image graphic + add score


//IV. When time pass, change the gameStage

//V. When time up, show the final score and reward message

//IV. Ask user to player again?

//V. Clear Score and generate new game


//===================

//var Player1Score
//var player1Game = new Game ();






//Functions:
//Function to generate Game Object (blind to the start button)

//Function to create new element, set position of element, set basic animation of bubble --> all-in-one function
  //Function to generate bubbles
function genBubble(){
  console.log("genBubble");
  $("#mainscreen").append("<img></img>");
  $("img").on("click", function(){
    console.log("clickBubble");
    $("img").addClass("bubbles");
  });
}


  //Function to change bubble image (by adding CSS class)

  //Function to remove bubble when its lifespan = 0

//Function to add value to the game score
//When time pass, change the gameStage
//When time up, show the final score and reward message





// append new element

// bind listener to the new element


});



