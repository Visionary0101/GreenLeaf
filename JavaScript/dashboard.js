// JavaScript/dashboard.js

const user = JSON.parse(localStorage.getItem("greenleaf_user"));
const msg = document.getElementById("welcome-message");
const main = document.querySelector("main");

if (user) {
  msg.textContent = `Hi ${user.name}, glad to see you here! 🌱`;
  main.style.display = "block";
} else {
  msg.textContent = "You're not logged in. Redirecting to login...";
  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
}

function logout() {
  localStorage.removeItem("greenleaf_user");
  alert("You have been logged out.");
  window.location.href = "login.html";
}
