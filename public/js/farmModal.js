const farmModal = document.getElementById("farmModal");

const farmNameStatus = document.getElementById("farmNameStatus");

const farmCreateStatus = document.getElementById("farmCreateStatus");

const farmSubmit = document.getElementById("farmSubmit");

farmSubmit.onclick = function () {
  if (farmSubmit) {
    farmModal.style.display = "none";
  }


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

  if (farmName && farmDesc) {
    const response = await fetch("/api/farms", {
      method: "POST",
      body: JSON.stringify({
        name: farmName,
        description: farmDesc,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      console.log("failed to create farm");
    }
  }
};

const animalModal = document.getElementById("animalModal");


const animalSpan = document.getElementById("animalClose");



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

  const farmId = document.querySelector('h1').dataset.farm_id;

  if (animalType && organicCost && manCost) {
    const response = await fetch('/api/animals', {
      method: 'POST',
      body: JSON.stringify({
        farm_id: farmId,
        name: animalName,
        breed: animalBreed,
        output: animalProduct,
        type: animalType,
        food_organic: organicCost,
        food_manufactured: manCost
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      console.log("failed to create animal");
    }
  }

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
