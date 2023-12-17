function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const boxes = document.getElementById("boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

function createBoxes(amount) {
  amount = input.value;

  if (amount <= 100 && amount > 0) {
    for (let i = 0; i < amount; i++) {
      const newElement = document.createElement("div");
      newElement.style.width = `${30 + i * 10}px`;
      newElement.style.height = `${30 + i * 10}px`;
      newElement.style.backgroundColor = getRandomHexColor();
      boxes.appendChild(newElement);
    }
  }

  input.value = "";
}
function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
