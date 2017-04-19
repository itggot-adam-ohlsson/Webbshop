var email = document.querySelector("#email");
var password = document.querySelector("#password");
var user = {
  mail:"adam.olsson@itggot.se",
  password:"hej"
};

function login() {
  if (email.value == user.mail && password.value == user.password) {
    window.location.assign("index.html");
  }
}
