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
