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

    var speed = parseInt(Math.random()*2000 + 4000);
    $("#mainscreen img:last-child").animate({ "top": "-=420px" }, speed, function(){ this.remove()} );

    $('#'+bubbleId).one("click", function(event){
      console.log("score");
      $(event.target).attr("src", "images/smiley.jpg");
      updateScore(1000);
    });
  };

  var startGame = function() {
    game.bubbleTimer = setInterval(genBubble, 1000);
    // startTimer();
    genBubble();
  }

  $("#start-btn").on("click", startGame);

  var game = new Game();






});
