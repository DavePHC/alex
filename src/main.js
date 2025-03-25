import './styles/main.scss'

const rangeInput = document.getElementById("rangeInput");
const rangeValue = document.getElementById("rangeValue");

rangeValue.textContent = `${rangeInput.value} %`;

rangeInput.addEventListener("input", function () {
    rangeValue.textContent = `${this.value} %`;
});
