let myFormElement = document.getElementById("myForm"); // From

let emailElement = document.getElementById("email"); // email
let passwordElement = document.getElementById("password"); // pae

let emailErrorMsg = document.getElementById("emailErrorMsg");
let passwordErrorMsg = document.getElementById("passwordErrorMsg");

emailElement.addEventListener("blur", function (e) {
  console.log(e.target.value);
  if (e.target.value === "") {
    emailErrorMsg.textContent = "*Required";
  } else {
    emailErrorMsg.textContent = "";
  }
});

passwordElement.addEventListener("blur", function (e) {
  if (e.target.value === "") {
    passwordErrorMsg.textContent = "*Required";
  } else {
    passwordErrorMsg.textContent = "";
  }
});

myFormElement.addEventListener("submit", function (e) {
  e.preventDefault(); // Page Reload
});
