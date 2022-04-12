// GAME CONTROLS, OBJECTS AND ELSE

class Game {
  constructor() {
    this.character = null;
    this.score = 0;
    //this.scoreCounter = scoreCounter;
    //this.shoot = shoot;
    this.domEl = null;
    this.meteorArr = [];
    this.meteorCounter = 0;
  }

  start() {
    this.character = new Character();
    this.character.domEl = this.createElement("character");
    this.drawElement(this.character);

       
    //meteor creation and draw

    let intervalId = setInterval(() => {
      if (this.meteorCounter === 30){
        this.meteor = new Meteor();
        this.meteor.domEl = this.createElement("meteor");
        this.drawElement(this.meteor);
        this.meteorArr.push(this.meteor);
        this.meteorCounter = Math.floor(Math.random() * 30);
    }
    this.meteorArr.forEach((element) => {
      element.moveLeft();
      this.drawElement(element);
      this.detectCollision(element);
    });
    this.meteorCounter++;}
    ,60);
  
  }

  

  playerMove(dir) {
    if (dir === "up" && this.character.heightPos < 85) {
      this.character.moveUp();
      console.log("moving up");
    } else if (dir === "down" && this.character.heightPos > 0) {
      this.character.moveDown();
      console.log("moving down");
    } else if (dir === "left" && this.character.widthPos > 0) {
      this.character.moveLeft();
      console.log("moving left");
    } else if (dir === "right" && this.character.widthPos < 90) {
      this.character.moveRight();
      console.log("moving right");
    }
    this.drawElement(this.character);
  }

  detectCollision(meteor){
    
    if(this.character.widthPos < meteor.widthPos + meteor.width && this.character.widthPos 
      + this.character.width > meteor.widthPos && this.character.heightPos < meteor.heightPos
      + meteor.height && this.character.height + this.character.heightPos > meteor.heightPos)
      {
         this.meteorArr.splice(this.meteorArr.indexOf(meteor), 1);
        meteor.domEl.remove();
        console.log(this.character);
      console.log(meteor)
       this.gameOver();
      }
  }

  gameOver() {
    alert("OH NO! YOU GOT DOWNED!!");
    location.reload();
  }

  //GAME LOGICS
  //create elements
  createElement(className) {
    const board = document.getElementById("board");
    const newEl = document.createElement("div");
    newEl.className = className;
    board.appendChild(newEl);
    return newEl;
  }

  //draw elements
  drawElement(element) {
    element.domEl.style.left = element.widthPos + "vw";
    element.domEl.style.bottom = element.heightPos + "vh";
    element.domEl.style.width = element.width + "vw";
    element.domEl.style.height = element.height + "vh";
  }
}

class Character {
  constructor() {
    this.heightPos = 50;
    this.widthPos = 0;
    this.height = 10;
    this.width = 10;
    this.domEl = null;
  }
  moveUp() {
    if (this.heightPos < 98) {
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

class Meteor {
  constructor() {
    this.height = 10 ;
    this.width = 10;
    this.widthPos = 100;
    this.heightPos = Math.floor(Math.random() * 95);
    this.domEl = null;   // 
  }

  moveLeft(){
      this.widthPos--;
  }
  
}

// class Bonus{
//     constructor(){

//     }
// }

const gameOn = new Game();
gameOn.start();

//movements player
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 68) {
    rightPressed = true;
    gameOn.playerMove("right");
  } else if (event.keyCode == 65) {
    leftPressed = true;
    gameOn.playerMove("left");
  } else if (event.keyCode == 83) {
    downPressed = true;
    gameOn.playerMove("down");
  } else if (event.keyCode == 87) {
    upPressed = true;
    gameOn.playerMove("up");
  }
});

