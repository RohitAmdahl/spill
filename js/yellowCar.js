import { context } from "../js/main.js";
export const yellow = () => {
  const img = new Image();
  img.src = "../img/yellowcar.png";
  img.onload = () => {
    context.drawImage(img, 140, 10, 50, 40);
  };
  return img;
};
