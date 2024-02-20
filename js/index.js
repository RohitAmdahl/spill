// code will be added when i started working on it

const restart = document.querySelector(".Restart-btn");
console.log(restart);
export const start = document.querySelector(".start-btn");

export const startGame = () => {
  start.addEventListener("click", () => {
    start.innerHTML = "stop";
  });
};
export const restartGame = () => {
  restart.addEventListener("click", () => {
    setInterval(() => {
      window.location.reload();
    }, 1000);
  });
};
