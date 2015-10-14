var Game = function(){
  this.score = 0;
  this.numBubbles = 0;
  this.bubbleTimer;
  this.bubbleSpeed = parseInt(Math.random()*2000 + 3000);
};