const form = document.getElementById("form");
const btn = document.getElementById("btn");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate();
});

function validate() {
  const emailValue = email.value.trim();

  if (emailValue == "") {
    setErrorFor(email, "Please enter an email");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Please provide a valid email");
  } else {
    setSuccessFor(email, "Your email submitted successfully");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.className = "input-group error";

  small.innerText = message;
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.className = "input-group success";
  small.innerText = message;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
