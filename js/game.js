// GAME CONTROLS, OBJECTS AND ELSE

class Game {
  constructor() {
    this.character = null;
    this.score = 0;
    //this.scoreCounter = scoreCounter;
    //this.shoot = false;
    this.domEl = null;
    this.meteorArr = [];
    this.meteorCounter = 0;
    this.bulletArr = [];
    this.bulletCounter = 0;

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
      this.deleteMeteor(element);
    });
    this.meteorCounter++;}
    ,60);

    
  
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

  // playerShoot(laser){
  //   if (laser === "shoot" && this.character === true){
  //     this.character.playerShoot();
  //     console.log("shooting");
  //   }
  // }

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

  deleteMeteor(meteor){
    if(meteor.widthPos === 0){
      this.meteorArr.splice(this.meteorArr.indexOf(meteor),1);
      meteor.domEl.remove();
    }
  }

  shootingCollision(){
    if(this.bullet.widthPos < this.meteor.widthPos + this.meteor.width && this.bullet.widthPos +
      this.bullet.width > this.meteor.widthPos && this.bullet.heightPos < this.meteor.heightPos +
      laser-height && this.bullet.height + this.bullet.heightPos > this.meteor.heightPos){
        this.bulletArr.splice(this.bulletArr.indexOf(this.meteor),1);
        this.meteor.domEl.remove();
        console.log(this.bullet);
        console.log(this.meteor)
      }
  }

  deleteLaser(laser){
    if(laser.widthPos === 100){
      this.bulletArr.splice(this.bulletArr.indexOf(laser),1);
      laser.domEl.remove();
  }
  }

  // removeMeteor(){

  // }
  gameOver() {
    alert("OH NO! YOU GOT DOWNED!!");
    location.reload();
  }

   //shooting creation and drawing

  makeBullets(){
    const bullet = new Bullet();
    this.bulletArr.push(bullet);
      bullet.domEl = this.createElement("bullet");
      this.drawElement(bullet);
      console.log("makeBullets")
      // bullet.playerShoot();
      // this.drawElement(this.domEl);

      this.bulletArr.forEach((laser) => {
        laser.moveRight();
        this.drawElement(laser);
        this.deleteLaser(laser);
      });
    }
    
  // shootingCollision(){
  // }

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
    this.height = 16.5;
    this.width = 7.5;
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
    this.height = 7 ;
    this.width = 5;
    this.widthPos = 100;
    this.heightPos = Math.floor(Math.random() * 95);
    this.domEl = null;   // 
  }

  moveLeft(){
      this.widthPos--;
  }
  
}

class Bullet{
  constructor(){
    this.height = 7;
    this.width = 7;
    this.widthPos = 0;
    this.heightPos = 50;
    this.domEl = null;
    
  }
    moveRight(){
      this.widthPos++;
    }  

    playerShoot(){
    if(spacePressed === true){
       }
     
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
  } else if (event.keyCode == 32){
    spacePressed = true;
    gameOn.makeBullets();
    console.log("shooting")
  }
});

