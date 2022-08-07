const farmModal = document.getElementById("farmModal");

const farmButton = document.getElementById("addFarmBtn");

const farmSpan = document.getElementById("farmClose");

const farmNameStatus = document.getElementById("farmNameStatus");

const farmCreateStatus = document.getElementById("farmCreateStatus");

const farmSubmit = document.querySelector("#farmSubmit");

farmButton.onclick = function () {
  farmModal.style.display = "block";
  console.log("works");
};

farmSpan.onclick = function () {
  farmModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == farmModal) {
    farmModal.style.display = "none";
  }
};

const farmFormHandler = (event) => {
  event.preventDefault();
  const farmName = document.querySelector("#farm-name").value.trim();

  const farmDesc = document.getElementById("farm-description").value.trim();

  if (!farmName || !farmDesc) {
    event.preventDefault();
    return false;
  } else {
    if (farmName.length <= 3) {
      farmNameStatus.classList.remove("hide");
    }

    if (farmDesc.length <= 3) {
      farmCreateStatus.classList.remove("hide");
    }
  }
};

document
  .querySelector("#farmSubmit")
  .addEventListener("submit", farmFormHandler);
