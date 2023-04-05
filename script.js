const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const sucess = document.querySelector("#sucess");
const errorNodes = document.querySelectorAll(".error");

function validateForm() {
  clearMessages();
  let errorflag = false;

  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = "Name cannot be blank";
    nameInput.classList.add("error-border");
    errorflag = true;
  }
  if (!emailIsValid(email.value)) {
    errorNodes[1].innerText = "Invalid Input";
    email.classList.add("error-border");
    errorflag = true;
  }
  if (message.value.length < 1) {
    errorNodes[2].innerText = "Please enter message";
    message.classList.add("error-border");
    errorflag = true;
  }

  if (errorflag) {
    sucess.innerText = "Try Again!";
  }
}

function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  sucess.innerText = "";
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}

function emailIsValid(email) {
  let pattern = /\$+@\S+\.\S+/;
  return pattern.test(email);
}
