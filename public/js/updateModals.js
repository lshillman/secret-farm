const editAnimalModal = document.getElementById("editModal");

const editAnimalButton = document.getElementById("editAnimalBtn");

const editAnimalSpan = document.getElementById("editModalClose");

editAnimalButton.onclick = function () {
  editAnimalModal.style.display = "block";
};

editAnimalSpan.onclick = function () {
  editAnimalModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == editModal) {
    editAnimalModal.style.display = "none";
  }
};

const updateAnimalFormHandler = async (event) => {
  event.preventDefault();
  const editAnimalID = document.querySelector("#nameInfo").dataset.animalid;

  const animalName = document.getElementById("edit-name").value.trim();

  const animalBreed = document.getElementById("edit-breed").value.trim();

  const animalOutput = document.getElementById("edit-product").value.trim();

  const animalType = document.getElementById("edit-type").value.trim();

  const organicCost = document.getElementById("edit-organic-cost").value.trim();

  const manCost = document.getElementById("edit-manufactured-cost").value;

  if (animalType && organicCost && manCost) {
    const response = await fetch(`/api/animals/${editAnimalID}`, {
      method: "PUT",
      body: JSON.stringify({
        name: animalName,
        breed: animalBreed,
        output: animalOutput,
        type: animalType,
        food_organic: organicCost,
        food_manufactured: manCost,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      location.reload();
    } else {
      console.log("failed to create animal");
    }
  }
};

const deleteModal = document.getElementById("deleteModal");

const deleteButton = document.getElementById("delAnimalBtn");

const deleteSpan = document.getElementById("deleteModalClose");

deleteButton.onclick = function () {
  deleteModal.style.display = "block";
};

deleteSpan.onclick = function () {
  deleteModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == deleteModal) {
    deleteModal.style.display = "none";
  }
};

const deleteConfirmation = async (event) => {
  event.preventDefault();
  const delCancel = document.getElementById("deleteDenyBtn");
  const delConfirm = document.getElementById("deleteConfBtn");
  const delAnimalID = document.querySelector("#nameInfo").dataset.animalid;

  delCancel.onclick = function () {
    deleteModal.style.display = "none";
  };
  delConfirm.onclick = async function () {
    await fetch(`/api/animals/${delAnimalID}`, {
      method: "DELETE",
    });
    window.location.replace("/dashboard");
  };
  console.log(event.target);
};

document
  .querySelector("#edit-form")
  .addEventListener("submit", updateAnimalFormHandler);

document
  .querySelector("#delete-form")
  .addEventListener("submit", deleteConfirmation);
