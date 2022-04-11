// GAME CONTROLS, OBJECTS AND ELSE 

class Game {
constructor(){
    this.player = null;
    this.score = 0;
    this.scoreCounter = scoreCounter;
    this.shoot = shoot;
    this.meteorArr = [];
    this.meteorCounter = 0;

}
start(){


}

playerMove(dir){


}


collision(){

}


gameOver(){


}

}


class Character{
    constructor() {
    this.heightPos = 50;
    this.widthPos = 0;
    this.height = 20;
    this.width = 27;
    this.domEl = null;
      }
      moveUp() {
        if (this.heightPos < 90) {
          this.heightPos += 4;
        }
      }
      moveDown() {
        if (this.heightPos > 0) {
          this.heightPos -= 4;
        }
      }
      moveLeft() {
        if (this.widthPos > 0) {
          this.widthPos -= 4;
        }
      }
      moveRight() {
        if (this.width < 92) {
          this.widthPos += 4;
        }
      }   
}


class Meteor{
constructor(){
this.heightPos = 20 ;
this.widthPos = 20;

}
}