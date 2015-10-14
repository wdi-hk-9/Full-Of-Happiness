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
    $("#mainscreen").append('<img src="images/coke.gif" class="bubble" id = "'+ bubbleId +'"/>');


    // left: 0 -310
    var leftRandom = parseInt(Math.random()*310);
    $("#mainscreen img:last-child").css('left', leftRandom)

    $("#mainscreen img:last-child").animate({ "top": "-=420px" }, game.bubbleSpeed, function(){ this.remove()} );

    $('#'+bubbleId).one("click", function(event){
      $(event.target).attr("src", "images/smiley.jpg");
      updateScore(1000);
    });
  };

  //=========Difficulty=========
  var level1 = function() {
    updateScore(game.score - game.score);
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
      console.log("started level 2")
      level2();
    }
    //Level 3
    if (secondsLeft == 40) {
      console.log("started level 3")
      level3();
    }
    //Level 4
    if (secondsLeft == 20) {
      console.log("started level 4")
      level4();
    }
    //Time's Up
    if (secondsLeft <= 0) {
      console.log("Time's up!");
      clearInterval(game.bubbleTimer);
      clearInterval(timer);
      console.log(game.score);
      secondsLeft = 60;
    };
  };


  //=========Start Game==========
  $("#start-btn").on("click", level1);

  var game = new Game();

});
