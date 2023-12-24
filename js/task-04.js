const form = document.querySelector(".login-form");
const registerForm = form.addEventListener("submit", formValid);

function formValid(event) {
  event.preventDefault();

  const form = event.target;
  const emailInput = form.elements.email.value.trim();
  const passwordInput = form.elements.password.value.trim();

  if (emailInput === "" || passwordInput === "") {
    alert("Усі поля форми повинні бути заповнені");
    return;
  }

  console.log({ email: emailInput, password: passwordInput });
  form.reset();
}
