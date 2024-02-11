const picture = () => {
  const canvas = document.querySelector(".myCanvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.src = "../img/red.png";
  img.onload = () => {
    ctx.drawImage(img, 130, 100, 40, 40);
  };
};
const image = picture();
console.log(image);
console.log(picture());

const draw = () => {
  const canvas = document.querySelector(".myCanvas");
  const shape = canvas.getContext("2d");
};

console.log(draw());
