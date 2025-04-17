document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const successMsg = document.getElementById("successMsg");
  const togglePassword = document.getElementById("togglePassword");

  // Password toggle
  togglePassword.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type");
    if (type === "password") {
      passwordInput.setAttribute("type", "text");
      togglePassword.textContent = "Hide";
    } else {
      passwordInput.setAttribute("type", "password");
      togglePassword.textContent = "Show";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset errors
    nameError.style.display = "none";
    emailError.style.display = "none";
    successMsg.style.display = "none";

    let valid = true;

    if (nameInput.value.trim() === "") {
      nameError.style.display = "block";
      valid = false;
    }

    if (!validateEmail(emailInput.value)) {
      emailError.style.display = "block";
      valid = false;
    }

    if (passwordInput.value.trim() === "") {
      alert("Password is required.");
      valid = false;
    }

    if (valid) {
      successMsg.style.display = "block";
      form.reset();
      togglePassword.textContent = "Show";
    }
  });

  function validateEmail(email) {
    // Simple regex for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});
