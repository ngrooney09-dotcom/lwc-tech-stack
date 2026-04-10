let count = 0;

function updateDisplay() {
  const display = document.getElementById("count");
  display.innerText = count;

  if (count > 0) {
    display.classList.add("text-green-500");
    display.classList.remove("text-red-500");
  } else if (count < 0) {
    display.classList.add("text-red-500");
    display.classList.remove("text-green-500");
  } else {
    display.classList.remove("text-green-500", "text-red-500");
  }
}

function increase() {
  count++;
  updateDisplay();
}

function decrease() {
  count--;
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}