var logModal = document.getElementById("logModal");

var logBtn = document.getElementById("logBtn");

var logSpan = document.getElementById("logClose");

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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var signModal = document.getElementById("signModal");

var signBtn = document.getElementById("signBtn");

var signSpan = document.getElementById("signClose");

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
  const name = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (name && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
