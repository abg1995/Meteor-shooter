// //GAME LOGICS

// function dom(className){
//     const board = document.getElementById("board");
//     const newEl = document.createElement("canvas");
//     newEl.className = className;
//     board.appendChild(newEl);
//     return newEl;
// }


// //create elements 
// function createElements(element){
//     element.domEl.style.left = element.widthPos + "%";
//     element.domEl.style.bottom = element.heightPos + "%";
//     element.domEl.style.width = element.width + "px";
//     element.domEl.style.height = element.height + "px";
// }

// const gameOn = new Game(dom, createElements);
// gameOn.start();


// //movements player
// document.addEventListener("keydown", function (event) {
//     if(event.keyCode == 68) {
//         rightPressed = true;
//         gameOn.playerMove("right")
//     }
//     else if(event.keyCode == 65) {
//         leftPressed = true;
//         gameOn.playerMove("left")
//     }
//     else if(event.keyCode == 83) {
//       downPressed = true;
//       gameOn.playerMove("down")
//     }
//     else if(event.keyCode == 87) {
//       upPressed = true;
//       gameOn.playerMove("up")
//     }
//   });

