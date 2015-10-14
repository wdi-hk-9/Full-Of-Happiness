var Game = function(){
  this.score = 0;
  this.numBubbles = 0;
  this.bubbleTimer;
  this.bubbleSpeed = parseInt(Math.random()*2000 + 3000);
};

// generate random speed function
// given a number, return a random speed
Game.prototype.randomSpeed = function (base) {
  return parseInt(Math.random()*2000 + base);
}
