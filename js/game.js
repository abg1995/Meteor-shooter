// GAME CONTROLS, OBJECTS AND ELSE 

class Game {
constructor(create, draw){
    this.character = null;
    this.score = 0;
    //this.scoreCounter = scoreCounter;
    //this.shoot = shoot;
    this.meteorArr = [];
    this.meteorCounter = 0;
    this.create = create;
    this.draw = draw;

}

start(){
this.character = new Character();
this.character.domEl = this.create("character");
this.draw(this.character);

}

playerMove(dir){
    if(dir === "up" && this.character.heightPos < 85){
        this.character.moveUp();
        console.log("moving up")
    }else if(dir === "down" && this.character.heightPos > 0){
        this.character.moveDown();
        console.log("moving down")
    }else if(dir === "left" && this.character.widthPos > 0){
        this.character.moveLeft();
        console.log("moving left")
    }else if(dir === "right" && this.character.widthPos < 90){
        this.character.moveRight();
        console.log("moving right")
    }
    this.draw(this.character);
    
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
    this.height = 110;
    this.width = 107;
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
        if (this.widthPos < 92) {
          this.widthPos += 4;
        }
      }   
}


class Meteor{
constructor(){
//this.height = 20 ;
//this.width = 20;

}
}


//GAME LOGICS

function dom(className){
    const board = document.getElementById("board");
    const newEl = document.createElement("div");
    newEl.className = className;
    board.appendChild(newEl);
    return newEl;
}


//create elements 
function createElements(element){
    element.domEl.style.left = element.widthPos + "%";
    element.domEl.style.bottom = element.heightPos + "%";
    element.domEl.style.width = element.width + "px";
    element.domEl.style.height = element.height + "px";
}

const gameOn = new Game(dom, createElements);
gameOn.start();


//movements player
document.addEventListener("keydown", function (event) {
    if(event.keyCode == 68) {
        rightPressed = true;
        gameOn.playerMove("right")
    }
    else if(event.keyCode == 65) {
        leftPressed = true;
        gameOn.playerMove("left")
    }
    else if(event.keyCode == 83) {
      downPressed = true;
      gameOn.playerMove("down")
    }
    else if(event.keyCode == 87) {
      upPressed = true;
      gameOn.playerMove("up")
    }
  });

