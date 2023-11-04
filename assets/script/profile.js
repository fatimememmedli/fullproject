let localLoginArr = JSON.parse(localStorage.getItem("login"));
let userDetailsName = document.querySelector(".userDetailsName");
let userDetailsEmail = document.querySelector(".userDetailsEmail");
let userDetailsPass = document.querySelector(".userDetailsPass");
let userDetailsBalance = document.querySelector(".userDetailsBalance");

console.log(localLoginArr.email);
userDetailsName.textContent = localLoginArr.username;
userDetailsEmail.textContent = localLoginArr.email;
userDetailsPass.textContent = localLoginArr.password;
userDetailsBalance.textContent = localLoginArr.balance;

let toBeLogin = document.querySelector(".to-be-login");
let doneLogin = document.querySelector(".done-login");
let dontRegister = document.querySelector(".dont-register");
let logOutIcon = document.querySelector(".logOutIcon");

console.log(localLoginArr);
if (localLoginArr) {
  toBeLogin.classList.replace("d-block", "d-none");
  doneLogin.classList.replace("d-none", "d-block");
  dontRegister.classList.replace("d-block", "d-none");
  logOutIcon.classList.remove("d-none", "d-block");
  doneLogin.textContent = localLoginArr.username;
}
logOutIcon.addEventListener("click", function () {
  localStorage.removeItem("login");
  toBeLogin.classList.replace("d-none", "d-block");
  doneLogin.classList.replace("d-block", "d-none");
  dontRegister.classList.replace("d-none", "d-block");
  logOutIcon.classList.remove("d-block", "d-none");
  doneLogin.textContent = localLoginArr.username;
});
