import { yellow } from "../js/yellowCar.js";
import { startGame } from "./index.js";
import { restartGame } from "./index.js";
export const canvas = document.querySelector(".myCanvas");
export const context = canvas.getContext("2d");
const redCar = () => {
  const img = new Image();
  img.src = "../img/red.png";
  img.onload = () => {
    context.drawImage(img, 150, 100, 40, 35);
  };
  return img;
};

const image = redCar();
const car = yellow();
const game = startGame();
const restart = restartGame();
