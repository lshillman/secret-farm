const updateAnimalModal = document.getElementById("animalModal");

const updateAnimalButton = document.getElementById("addAnimalBtn");

const updateAnimalSpan = document.getElementById("animalClose");

updateAnimalButton.onclick = function () {
  updateAnimalModal.style.display = "block";
};

updateAnimalSpan.onclick = function () {
  updateAnimalModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == animalModal) {
    updateAnimalModal.style.display = "none";
  }
};

const updateAnimalFormHandler = async (event) => {
  event.preventDefault();
  const animalName = document.getElementById("edit-name").value.trim();
  const animalNameEl = document.getElementById("edit-name");

  const animalBreed = document.getElementById("edit-breed").value.trim();
  const animalBreedEl = document.getElementById("edit-breed");

  const animalProduct = document.getElementById("edit-product").value.trim();
  const animalProductEl = document.getElementById("edit-product");

  const animalType = document.getElementById("edit-type").value.trim();
  const animalTypeEl = document.getElementById("edit-type");

  const organicCost = document.getElementById("edit-organic-cost").value.trim();
  const organicCostEl = document.getElementById("edit-organic-cost");

  const manCost = document.getElementById("edit-manufactured-cost").value;
  const manCostEl = document.getElementById("edit-manufactured-cost");

  const farmId = document.querySelector("h1").dataset.farm_id;

  if (animalType && organicCost && manCost) {
    const response = await fetch("/api/animals", {
      method: "POST",
      body: JSON.stringify({
        farm_id: farmId,
        name: animalName,
        breed: animalBreed,
        output: animalProduct,
        type: animalType,
        food_organic: organicCost,
        food_manufactured: manCost,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
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
