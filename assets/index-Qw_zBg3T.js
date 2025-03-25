(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const i=document.getElementById("rangeInput"),s=document.getElementById("rangeValue");s.textContent=`${i.value} %`;i.addEventListener("input",function(){s.textContent=`${this.value} %`});

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
