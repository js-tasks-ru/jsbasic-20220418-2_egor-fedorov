import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    let ribbonMenu = createElement(`<div class="ribbon"></div>`);
    let nav = createElement(`<nav class="ribbon__inner"></nav>`);

    for (let category of categories) {
      if (nav.name === 'All') {
        nav.innerHTML += `<a href="#" class="ribbon__item ribbon__item_active" data-id="">${category.name}</a>`
      } else {
        nav.innerHTML += `<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`;
      }

    }
    let buttonLeft = createElement(`<button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </button>`);
    let buttonRight = createElement(`<button class="ribbon__arrow ribbon__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </button>`);
    ribbonMenu.appendChild(buttonLeft);
    ribbonMenu.appendChild(nav);
    ribbonMenu.appendChild(buttonRight);
    this.elem = ribbonMenu;

    buttonLeft.classList.remove('ribbon__arrow_visible');
    buttonRight.classList.add('ribbon__arrow_visible');


    nav.addEventListener('scroll', () => {
      if (nav.scrollLeft == 0) {
        buttonLeft.classList.remove('ribbon__arrow_visible');
      } else {
        buttonLeft.classList.add('ribbon__arrow_visible');
      }
      if (nav.scrollWidth - nav.scrollLeft - nav.clientWidth < 1) {
        buttonRight.classList.remove('ribbon__arrow_visible');
      } else {
        buttonRight.classList.add('ribbon__arrow_visible');
      }
    });
    buttonLeft.addEventListener('click', () => {
      nav.scrollBy(-350, 0);
    });
    buttonRight.addEventListener('click', () => {
      nav.scrollBy(350, 0);
    });

    nav.addEventListener('click', (event) => {
      for (let elem of nav.children) {
        elem.classList.remove('ribbon__item_active');
      }
      event.preventDefault();
      event.target.classList.add('ribbon__item_active');
      ribbonMenu.dispatchEvent(new CustomEvent('ribbon-select', {
        detail: event.target.getAttribute("data-id"),
        bubbles: true
      }));
    });
  }

}
