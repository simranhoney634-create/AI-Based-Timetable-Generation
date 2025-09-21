
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  let role = document.getElementById("role").value;
  if (!role) {
    alert("Please select a role (Student, Teacher, or School).");
    return;
  }

  // For now, just show success (later this can connect to backend/DB)
  alert("Sign up successful as " + role + "!");
  window.location.href = "login.html"; // redirect to login page
});

// Show/Hide password
document.getElementById("showPassword").addEventListener("change", function() {
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");
  if (this.checked) {
    password.type = "text";
    confirmPassword.type = "text";
  } else {
    password.type = "password";
    confirmPassword.type = "password";
  }
});

