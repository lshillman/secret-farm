const farmModal = document.getElementById("farmModal");

const farmButton = document.getElementById("addFarmBtn");

const farmSpan = document.getElementById("farmClose");

const farmNameStatus = document.getElementById("farmNameStatus");

const farmCreateStatus = document.getElementById("farmCreateStatus");

const farmSubmit = document.getElementById("farmSubmit");

farmButton.onclick = function () {
  farmModal.style.display = "block";
};

farmSpan.onclick = function () {
  farmModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == farmModal) {
    farmModal.style.display = "none";
  }
};
const farmFormHandler = async (event) => {
  event.preventDefault();
  const farmName = document.getElementById("farm-name").value.trim();

  const farmDesc = document.getElementById("farm-description").value.trim();

  console.log(farmName);
  console.log(farmDesc);
};

const animalModal = document.getElementById("animalModal");

const animalButton = document.getElementById("addAnimalBtn");

const animalSpan = document.getElementById("animalClose");

animalButton.onclick = function () {
  animalModal.style.display = "block";
};

animalSpan.onclick = function () {
  animalModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == animalModal) {
    animalModal.style.display = "none";
  }
};

const animalFormHandler = async (event) => {
  event.preventDefault();
  const animalName = document.getElementById("animal-name").value.trim();
  const animalNameEl = document.getElementById("animal-name");

  const animalBreed = document.getElementById("animal-breed").value.trim();
  const animalBreedEl = document.getElementById("animal-breed");

  const animalProduct = document.getElementById("animal-product").value.trim();
  const animalProductEl = document.getElementById("animal-product");

  const animalType = document.getElementById("animal-type").value.trim();
  const animalTypeEl = document.getElementById("animal-type");

  const organicCost = document.getElementById("organic-cost").value.trim();
  const organicCostEl = document.getElementById("organic-cost");

  const manCost = document.getElementById("manufactured-cost").value.trim();
  const manCostEl = document.getElementById("manufactured-cost");

  console.log(animalName);
  console.log(animalBreed);
  console.log(animalProduct);
  console.log(animalType);
  console.log(organicCost);
  console.log(manCost);

  if (
    animalTypeEl.textContent === "" ||
    organicCostEl.value === "" ||
    manCostEl.value === ""
  ) {
    if (!animalType) {
      animalType.classList.add("inputField");
    }
    if (!organicCost) {
      organicCost.classlist.add("inputField");
    }
    if (!manCost) {
      manCost.classlist.add("inputField");
    }
  }
};

document
  .querySelector("#farm-form")
  .addEventListener("submit", farmFormHandler);
document
  .querySelector("#animal-form")
  .addEventListener("submit", animalFormHandler);
