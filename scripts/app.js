$(document).ready( function(){

  //Overall Flow for 1P only

  //I. Click start button to begin the game
  $("#start-btn").on("click", startGame);

  //II. Generate game object
  var game = new GAME();

  //III. Generate bubbles

  //III. Click bubble to change image graphic + add score
  $("#score").html(game.score);

  //IV. When time pass, change the gameStage

  //V. When time up, show the final score and reward message

  //IV. Ask user to player again?

  //V. Clear Score and generate new game


  //===================









  //Functions:
  //Function to generate Game Object (blind to the start button)

  //Function to create new element, set position of element, set basic animation of bubble --> all-in-one function
    //Function to generate bubbles
      //bubble will change image + add score when clicked
      //bubble will be removed after animation is done

  function startGame() {
    var randomInterval = Math.random() * 1000;
    setInterval(genBubble, randomInterval + randomInterval);
  }



  function genBubble(){
    $("#mainscreen").append("<img></img>")
    $("img").animate({ "top": "-=420px" }, 4000, function(){this.remove()});
    $("img").one("click", function(event){
      $(event.target).addClass("bubbles");
      game.score += 1000;
      $("#score").html(game.score);
    });
  }


  //Function to remove bubble when its lifespan = 0


  //When time up, show the final score and reward message



});



