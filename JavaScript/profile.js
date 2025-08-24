// Existing code...
const user = JSON.parse(localStorage.getItem("greenleaf_user")) || {};
const nameInput = document.getElementById("edit-name");
const emailInput = document.getElementById("edit-email");
const profileImg = document.getElementById("profile-pic");
const uploadPicInput = document.getElementById("upload-pic");

if (user.name && user.email) {
  nameInput.value = user.name;
  emailInput.value = user.email;
}
if (user.image) {
  profileImg.src = user.image;
}

function saveProfile() {
  user.name = nameInput.value.trim();
  user.email = emailInput.value.trim();
  localStorage.setItem("greenleaf_user", JSON.stringify(user));
  alert("Profile updated successfully!");
}

uploadPicInput.addEventListener("change", function () {
  const file = uploadPicInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const imageUrl = e.target.result;
    profileImg.src = imageUrl;
    user.image = imageUrl;
    localStorage.setItem("greenleaf_user", JSON.stringify(user));
  };
  reader.readAsDataURL(file);
});

function logout() {
  localStorage.removeItem("greenleaf_user");
  alert("Logged out!");
  window.location.href = "login.html";
}

// 🆕 Delete account
function deleteAccount() {
  const confirmDelete = confirm("Are you sure you want to delete your account? This action cannot be undone.");
  if (confirmDelete) {
    localStorage.removeItem("greenleaf_user");
    localStorage.removeItem("cart"); // also clear cart
    alert("Your account has been deleted.");
    window.location.href = "signup.html";
  }
}
