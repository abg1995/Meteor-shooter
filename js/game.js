// GAME CONTROLS, OBJECTS AND ELSE

class Game {
  constructor() {
    this.character = null;
    this.score = 0;
    //this.scoreCounter = scoreCounter;
    this.domEl = null;
    this.meteorArr = [];
    this.meteorCounter = 0;
    this.bulletArr = [];
  }

  start() {
    this.character = new Character();
    this.character.domEl = this.createElement("character");
    this.drawElement(this.character);

    //meteor creation and draw

    let intervalId = setInterval(() => {
      if (this.meteorCounter === 30) {
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
        this.deleteMeteor(element);
        this.bulletArr.forEach((bullet) => {
          this.shootingCollision(bullet,element);
        })
      });
      this.meteorCounter++;
      this.bulletArr.forEach((laser) => {
        laser.moveRight();
        this.drawElement(laser);
        this.deleteLaser(laser)});
    }, 60);
  
    
  }

  playerMove(dir) {
    if (dir === "up" && this.character.heightPos < 85) {
      this.character.moveUp();
    } else if (dir === "down" && this.character.heightPos > 0) {
      this.character.moveDown();
    } else if (dir === "left" && this.character.widthPos > 0) {
      this.character.moveLeft();
    } else if (dir === "right" && this.character.widthPos < 90) {
      this.character.moveRight();
    }
    this.drawElement(this.character);
  }

  detectCollision(meteor) {
    if (
      this.character.widthPos < meteor.widthPos + meteor.width &&
      this.character.widthPos + this.character.width > meteor.widthPos &&
      this.character.heightPos < meteor.heightPos + meteor.height &&
      this.character.height + this.character.heightPos > meteor.heightPos
    ) {
      this.meteorArr.splice(this.meteorArr.indexOf(meteor), 1);
      meteor.domEl.remove();
      this.gameOver();
    }
  }

  deleteMeteor(meteor) {
    if (meteor.widthPos === 0) {
      this.meteorArr.splice(this.meteorArr.indexOf(meteor), 1);
      meteor.domEl.remove();
    }
  }

  shootingCollision(bullet, meteor) {
    if (
      bullet.widthPos < meteor.widthPos + meteor.width &&
      bullet.widthPos + bullet.width > meteor.widthPos &&
      bullet.heightPos < meteor.heightPos + meteor.height &&
      bullet.height + bullet.heightPos > meteor.heightPos
    ) {
      this.bulletArr.splice(this.bulletArr.indexOf(bullet), 1);
      this.meteorArr.splice(this.meteorArr.indexOf(meteor), 1);
      bullet.domEl.remove();
      meteor.domEl.remove();
      let point = document.getElementById("scoring");
      let newScore = parseInt(point.innerHTML)+10; console.log(point);
      point.innerHTML = newScore;
      if (point.innerHTML == 50){
        alert("NICE, YOU CAN GO TO THE NEXT LEVEL!")
      }
    }
    
  }

  deleteLaser(laser) {
    if (laser.widthPos === 100) {
      this.bulletArr.splice(this.bulletArr.indexOf(laser), 1);
      laser.domEl.remove();
    }
  }

  gameOver() {
    alert("OH NO! YOU GOT DOWNED!!");
    location.href="";
  }

  //shooting creation and drawing

  makeBullets() {
    const bullet = new Bullet(
      this.character.widthPos,
      this.character.heightPos
    );
    this.bulletArr.push(bullet);
    bullet.domEl = this.createElement("bullet");
    this.drawElement(bullet);
     this.bulletArr.forEach((laser) => {
      this.drawElement(laser);
      laser.moveRight();
      this.deleteLaser(laser);
    });
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
    this.heightPos = 50; // y axis
    this.widthPos = 0; //x axis
    this.height = 16.5;
    this.width = 7.5;
    this.domEl = null;
  }
  moveUp() {
    if (this.heightPos < 100) {
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
    if (this.widthPos < 98) {
      this.widthPos += 4;
    }
  }
}

class Meteor {
  constructor() {
    this.height = 10;
    this.width = 7;
    this.widthPos = 100;
    this.heightPos = Math.floor(Math.random() * 95);
    this.domEl = null; //
  }

  moveLeft() {
    this.widthPos--;
  }
}

class Bullet {
  constructor(positionX, positionY) {
    this.height = 7;
    this.width = 7;
    this.widthPos = positionX;
    this.heightPos = positionY;
    this.domEl = null;
  }
  moveRight() {
    this.widthPos = this.widthPos + 2;
  }  
}

// class Bonus{
//  constructor(){
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
  } else if (event.keyCode == 32) {
    spacePressed = true;
    gameOn.makeBullets();  }
});
