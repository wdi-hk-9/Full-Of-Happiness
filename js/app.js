$(document).ready( function(){

  //=========Add points & update scores==========

  var updateScore = function(points) {
    game.score += points;
    $("#score").html(game.score);
  };

  //=========Generate Bubbles==========
  var genBubble = function(){
    game.numBubbles++;
    var bubbleId = "bubble-" + game.numBubbles;
    $("#mainscreen").append('<img src="images/bubble.png" class="bubble" id = "'+ bubbleId +'"/>');


    // left: 0 -310
    var leftRandom = parseInt(Math.random()*310);
    $("#mainscreen img:last-child").css('left', leftRandom)

    $("#mainscreen img:last-child").animate({ "top": "-=380px" }, game.bubbleSpeed, function(){ this.remove()} );

    $('#'+bubbleId).mouseover("click", function(event){
      $(event.target).attr("src", "images/smiley.png");
      updateScore(1000);
    });
  };

  //=========Difficulty=========
  var level1 = function() {
    updateScore(- game.score);
    displayUI("#score", 3000);
    slideUpUI("#start-btn, #message1, #message2", 0);
    fadeOutUI("#message4", 0);
    moveBackground();
    game.bubbleTimer = setInterval(genBubble, 3000);
    startTimer();
  }

  var level2 = function() {
    clearInterval(game.bubbleTimer);
    game.bubbleSpeed = game.randomSpeed(2600)
    game.bubbleTimer = setInterval(genBubble, 1000);
  }

  var level3 = function() {
    clearInterval(game.bubbleTimer);
    game.bubbleSpeed = game.randomSpeed(2000)
    game.bubbleTimer = setInterval(genBubble, 500);
  }

  var level4 = function() {
    clearInterval(game.bubbleTimer);
    game.bubbleSpeed = game.randomSpeed(3000)
    game.bubbleTimer = setInterval(genBubble, 200);
  }
  //=========Set timer==========

  var timer;
  var secondsLeft = 80;
  var startTimer = function(){
    timer = setInterval(everySecond, 1000);
  };

  var everySecond = function(){
    console.log("Time left: " + secondsLeft--);

    //Level 2
    if (secondsLeft == 60) {
      console.log("started level 2");
      level2();
    }
    //Level 3
    if (secondsLeft == 40) {
      console.log("started level 3");
      level3();
    }
    //Level 4
    if (secondsLeft == 20) {
      console.log("started level 4");
      level4();
    }
    //Time's Up
    if (secondsLeft <= 0) {
      console.log("Time's up!");
      displayUI("#message3", 3000);
      fadeOutUI("#message3", 2000);
      displayUI("#message4", 7000);
      $("#start-btn").html("Play Again").css("width", "140")
      slideDownUI("#start-btn", 9000);
      clearInterval(game.bubbleTimer);
      clearInterval(timer);
      console.log(game.score);
      secondsLeft = 80;
    };
  };

  //=========User Interface Control==========

  function displayUI(elementID, delayVal){
    $(elementID).delay(delayVal).animate({ "opacity": "1" }, 1000);
  }

  function fadeOutUI(elementID, delayVal){
    $(elementID).delay(delayVal).animate({ "opacity": "0" }, 1000);
  }

  function slideUpUI(elementID, delayVal){
    $(elementID).delay(delayVal).slideUp(500);
  }

  function slideDownUI(elementID, delayVal){
    $(elementID).delay(delayVal).slideDown(500);
  }

  function moveBackground(){
    $("#background").delay(1000).animate({ "top": "35" }, 500);
  }


  //=========Start Game==========

  $("#start-btn").on("click", level1);
  var game = new Game();

});
