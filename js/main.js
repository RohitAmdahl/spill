import { yellow } from "../js/yellowCar.js";
import { startGame } from "./index.js";
import { restartGame } from "./index.js";
export const canvas = document.querySelector(".myCanvas");
export const context = canvas.getContext("2d");

const car = yellow();
const game = startGame();
const restart = restartGame();

let spriteObject = {
  x: 150,
  y: 100,
  width: 40,
  height: 35,
};

let speedX = 0;
let speedY = 0;
let moveLeft = false;
let moveRight = false;
const img = new Image();
img.src = "../img/red.png";
const redCar = () => {
  img.onload = () => {
    context.drawImage(
      img,
      spriteObject.x,
      spriteObject.y,
      spriteObject.width,
      spriteObject.height
    );
  };
};
const image = redCar();
