const restart = document.querySelector(".Restart-btn");
console.log(restart);
const start = document.querySelector(".start-btn");

export const startGame = () => {
  start.addEventListener("click", () => {
    start.innerHTML = "stop";
  });
  return start;
};
export const restartGame = () => {
  restart.addEventListener("click", () => {
    setInterval(() => {
      window.location.reload();
    }, 1000);
  });
};
