function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", changeColorBackground);

function changeColorBackground() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  document.querySelector(".color").textContent = randomColor;
}
