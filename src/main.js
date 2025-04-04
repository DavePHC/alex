import './styles/main.scss'

const rangeInput = document.getElementById("rangeInput");
const rangeValue = document.getElementById("rangeValue");

rangeValue.textContent = `${rangeInput.value} %`;

rangeInput.addEventListener("input", function () {
    rangeValue.textContent = `${this.value} %`;
});

class OverlayMenu {
    selectors = {
      root: "[data-js-overlay-menu]",
      dialog: "[data-js-overlay-menu-dialog]",
      burgerButton: "[data-js-overlay-menu-burger-button]",
    }
    
    stateClasses = {
      isActive: "is-active",
      isLocked: "is-locked",
    }
    
    constructor() {
      this.rootElement = document.querySelector(this.selectors.root);
      this.dialogElement = this.rootElement.querySelector(this.selectors.dialog);
      this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton);
      this.bindEvents()
    }
    
    onBurgerButtonClick = () => {
      this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
      this.dialogElement.open = !this.dialogElement.open;
      document.documentElement.classList.toggle(this.stateClasses.isLocked);
    }
    
    bindEvents() {
      this.burgerButtonElement.addEventListener("click", this.onBurgerButtonClick)
    }
}

new OverlayMenu();
