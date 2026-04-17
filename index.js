const select = document.getElementById("colorSelect");
const button = document.getElementById("showBtn");
const result = document.getElementById("result");
const text = document.getElementById("resultText");
const box = document.getElementById("colorBox");

button.addEventListener("click", () => {
  const color = select.value;

  if (color === "") {
    text.textContent = "Please choose a color.";
    result.classList.remove("hidden");
    box.style.backgroundColor = "transparent";
    return;
  }

  text.textContent = `Your favourite color is ${color}.`;
  result.classList.remove("hidden");

  box.style.backgroundColor = color;
});