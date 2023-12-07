const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", function () {
  const inputValue = input.value.trim();

  const outputName = inputValue === "" ? "Anonymous" : inputValue;

  output.textContent = outputName;
});
