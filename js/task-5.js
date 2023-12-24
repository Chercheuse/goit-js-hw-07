function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function colorChange() {
  let newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  const colorName = document.querySelector(".color");
  colorName.textContent = newColor;
}

document.querySelector(".change-color").addEventListener("click", colorChange);
