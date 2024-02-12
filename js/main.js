import { yellow } from "../js/yellowCar.js";
// import { backgroundImg } from "../js/backgroundGreen.js";
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

// const background = backgroundImg();
