//GAME LOGICS

function dom(){
    const board = document.getElementById("board");
    const newEl = document.createElement("div");
    newEl.className = className;
    board.appendChild(newEl);
    return newEl;
}

const gameOn = 


//create elements 

function createElements(element){
    element.domEl.style.left = element.widthPos + "vw";
    element.domEl.style.down = element.heightPos + "vh";
    element.domEl.style.width = element.width + "px";
    element.domEl.style.height = element.height + "px";
}

//movements player
document.addEventListener("keydown", function (event) {
    if(event.keyCode == 39) {
        rightPressed = true;
        console.log("key pressed")
    }
    else if(event.keyCode == 37) {
        leftPressed = true;
        console.log("key pressed")
    }
    if(event.keyCode == 40) {
      downPressed = true;
      console.log("key pressed")
    }
    else if(event.keyCode == 38) {
      upPressed = true;
      console.log("key pressed")
    }
  });

