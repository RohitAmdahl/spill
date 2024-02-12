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
console.log(image);
console.log(picture());

const draw = () => {};

console.log(draw());
