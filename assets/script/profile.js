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
