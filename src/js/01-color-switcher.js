function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const bodyEl = document.querySelector("body");

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
      
    startBtn.setAttribute("disabled", "disabled")    
  bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
});


stopBtn.addEventListener("click", () => {
     
    clearInterval(timerId);
    startBtn.removeAttribute("disabled")
});