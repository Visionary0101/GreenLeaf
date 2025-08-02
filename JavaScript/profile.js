// JavaScript/profile.js

const user = JSON.parse(localStorage.getItem("greenleaf_user"));
const nameSpan = document.getElementById("profile-name");
const emailSpan = document.getElementById("profile-email");
const editForm = document.getElementById("edit-form");
const nameInput = document.getElementById("edit-name");
const emailInput = document.getElementById("edit-email");

if (user) {
  nameSpan.textContent = user.name;
  emailSpan.textContent = user.email;
  nameInput.value = user.name;
  emailInput.value = user.email;
} else {
  alert("You're not logged in. Redirecting...");
  window.location.href = "login.html";
}

// Update Profile
editForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const newName = nameInput.value.trim();
  const newEmail = emailInput.value.trim();

  const updatedUser = {
    ...user,
    name: newName,
    email: newEmail,
  };

  localStorage.setItem("greenleaf_user", JSON.stringify(updatedUser));
  alert("Profile updated successfully!");
  location.reload(); // Refresh to update UI
});

// Logout
function logout() {
  localStorage.removeItem("greenleaf_user");
  alert("Logged out!");
  window.location.href = "login.html";
}
