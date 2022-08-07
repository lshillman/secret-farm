const logModal = document.getElementById("logModal");

const logBtn = document.getElementById("logBtn");

const logSpan = document.getElementById("logClose");

const loginStatus = document.getElementById("loginStatus");

logBtn.onclick = function () {
  logModal.style.display = "block";
};

logSpan.onclick = function () {
  logModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == logModal) {
    logModal.style.display = "none";
  }
};

const signModal = document.getElementById("signModal");

const signBtn = document.getElementById("signBtn");

const signSpan = document.getElementById("signClose");

const signupStatus = document.getElementById("signupStatus");

signBtn.onclick = function () {
  signModal.style.display = "block";
};

signSpan.onclick = function () {
  signModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == logModal) {
    signModal.style.display = "none";
  }
};

const loginFormHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (name && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      loginStatus.textContent = "Failed to log in.";
      return;
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  const pass1 = document.querySelector("#password-signup").value.trim();
  const pass2 = document.querySelector("#password-signup-conf").value.trim();

  if (pass2 !== pass1) {
    console.log("Password Incorrect");
    signupStatus.textContent = "Password does not match";
    return;
  }

  if (name && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      signupStatus.textContent = "Error Signing up!";
      return;
    }
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
