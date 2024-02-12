const canvas = document.querySelector(".myCanvas");
const context = canvas.getContext("2d");

const picture = () => {
  const img = new Image();
  img.src = "../img/red.png";
  img.onload = () => {
    context.drawImage(img, 130, 100, 40, 40);
  };
};
const image = picture();

let KEY_CODE = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};
