import { yellow } from "../js/yellowCar.js";

import { restartGame } from "./index.js";
export const canvas = document.querySelector(".myCanvas");
export const context = canvas.getContext("2d");

const car = yellow();
const restart = restartGame();

let spriteObject = {
  x: 150,
  y: 110,
  width: 40,
  height: 35,
};

const img = new Image();
img.src = "../img/red.png";
let speedX = 0;
let speedY = 0;
let moveLeft = false;
let moveRight = false;
img.onload = () => {
  context.drawImage(
    img,
    spriteObject.x,
    spriteObject.y,
    spriteObject.width,
    spriteObject.height
  );
};
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    moveLeft = true;
  }
  if (e.key === "ArrowRight") {
    moveRight = true;
  }
});
window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft") {
    moveLeft = false;
  }
  if (e.key === "ArrowRight") {
    moveRight = false;
  }
});

function update() {
  if (moveLeft) {
    speedX = -1;
  }
  if (moveRight) {
    speedX = 1;
  }
  if (!moveLeft && !moveRight) {
    speedX = 0;
  }
  if (spriteObject.x < 0) {
    spriteObject.x = 0;
  }
  if (spriteObject.x > canvas.width - spriteObject.width) {
    spriteObject.x = canvas.width - spriteObject.width;
  }

  spriteObject.x += speedX;
  spriteObject.y += speedY;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(
    img,
    spriteObject.x,
    spriteObject.y,
    spriteObject.width,
    spriteObject.height
  );
  requestAnimationFrame(update);
}

update();
