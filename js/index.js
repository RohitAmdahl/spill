const restart = document.querySelector(".Restart-btn");
console.log(restart);

export const restartGame = () => {
  restart.addEventListener("click", () => {
    setInterval(() => {
      window.location.reload();
    }, 1000);
  });
};
