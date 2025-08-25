// JavaScript/auth.js

// ====== Sign Up Logic ======
if (window.location.pathname.includes("signup.html")) {
  const signupForm = document.querySelector(".auth-form");

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = signupForm.querySelector("input[placeholder='Full Name']").value;
    const email = signupForm.querySelector("input[placeholder='Email']").value;
    const password = signupForm.querySelector("input[placeholder='Password']").value;

    const user = { name, email, password };

    localStorage.setItem("greenleaf_user", JSON.stringify(user));
    alert("Account created successfully! Please log in.");
    window.location.href = "login.html";
  });
}

// ====== Login Logic ======
if (window.location.pathname.includes("login.html")) {
  const loginForm = document.querySelector(".auth-form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = loginForm.querySelector("input[placeholder='Email']").value;
    const password = loginForm.querySelector("input[placeholder='Password']").value;

    const savedUser = JSON.parse(localStorage.getItem("greenleaf_user"));

    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      // Redirect to animation page first
      window.location.href = "animation.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
}
