const form = document.querySelector(".login-form");
const registerForm = form.addEventListener('submit', formValid)

function formValid(event) {
  event.preventDefault();

  const form = event.target;
  const login = form.elements.email;
  const password = form.elements.password;

  if (login.value === "" || password.value === "") {
    alert("All form fields must be filled in");
  }

  console.log({email : login.value.trim(), password: password.value.trim()});
  form.reset();
}
