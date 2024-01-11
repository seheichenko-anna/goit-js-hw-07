const inputNumber = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createButton.addEventListener("click", onCreateButtonClick);
destroyButton.addEventListener("click", onDestroyButtonClick);

function onCreateButtonClick() {
  const amount = inputNumber.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNumber.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
}

function onDestroyButtonClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  destroyBoxes();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.margin = "5px";
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
