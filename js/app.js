$(document).ready( function(){


  var updateScore = function(points) {
    game.score =+ points;
    console.log(game.score);
    $("#score").html(game.score);
  };

  var genBubble = function(){
    game.numBubbles++;
    var bubbleId = "bubble-" + game.numBubbles;
    $("#mainscreen").append('<img src="images/coke.gif" class="bubble" id = "'+ bubbleId +'"/>');


    // left: 0 -310
    var leftRandom = parseInt(Math.random()*310);
    $("#mainscreen img:last-child").css('left', leftRandom);

    $("#mainscreen img:last-child").animate({ "top": "-=420px" }, game.bubbleSpeed, function(){ this.remove()} );

    $('#'+bubbleId).one("click", function(event){
      console.log("score");
      $(event.target).attr("src", "images/smiley.jpg");
      updateScore(1000);
    });
  };


  //=========Set timer==========

  var timer;
  var secondsLeft = 20;
  var startTimer = function(){
    timer = setInterval(everySecond, 1000);
  };

  var everySecond = function(){
    console.log("Time left: " + secondsLeft--);

    //When time remains 60%, increase the speed
    if (10 > secondsLeft>0) {
      level2();
    }
    //When time remains 30%, increase the bubbles
    // if (10 > secondsLeft>0) {
    //   level3();
    // }
    //When time up, stop bubble, show the final score and reward message
    if (secondsLeft <= 0) {
      console.log("Time's up!");
      clearInterval(game.bubbleTimer);
      clearInterval(timer);
      secondsLeft = 10;
    };
  };

  //=========Difficulty=========
  var level1 = function() {
    game.bubbleTimer = setInterval(genBubble, 3000);
    startTimer();
  }

  var level2 = function() {
    clearInterval(game.bubbleTimer);
    game.bubbleSpeed = parseInt(Math.random()*2000 + 1000);
    game.bubbleTimer = setInterval(genBubble, 200);
  }

  var level3 = function() {
    clearInterval(game.bubbleTimer);
    game.bubbleTimer = setInterval(genBubble, 200);

  }

  //=========Start Game==========
  $("#start-btn").on("click", level1);

  var game = new Game();

});
