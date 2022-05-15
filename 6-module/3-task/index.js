import createElement from '../../assets/lib/create-element.js';


export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    let carousel = createElement(`<div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    </div>`);
    let inner = createElement(`<div class="carousel__inner"></div>`);
    for (let slide of slides) {
      inner.innerHTML += `
      <div class="carousel__slide" data-id="penang-shrimp">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      `;
    }
    carousel.appendChild(inner);
    this.elem = carousel;
    // Переключение слайдов карусели
    const buttonRight = carousel.querySelector('.carousel__arrow_right');
    const buttonLeft = carousel.querySelector('.carousel__arrow_left');
    const carouselInner = carousel.querySelector('.carousel__inner');
    const slidesCount = carouselInner.querySelectorAll('.carousel__slide').length;

    let activeSlideIndex = 0;
    buttonLeft.style.display = 'none';

    buttonRight.addEventListener('click', () => {
      changeSlide('right');
    });
    buttonLeft.addEventListener('click', () => {
      changeSlide('left');
    });

    function changeSlide(direction) {
      // Проверка, какая кнопка нажата
      if (direction === 'left') {
        activeSlideIndex--;
      } else if (direction === 'right') {
        activeSlideIndex++;
      }
      // Проверка, какой слайд для реализации видимости кнопок
      if (activeSlideIndex !== 0) {
        buttonLeft.style.display = '';
      } else {
        buttonLeft.style.display = 'none';
      }
      if (activeSlideIndex === slidesCount - 1) {
        buttonRight.style.display = 'none';
      } else {
        buttonRight.style.display = '';
      }

      carouselInner.style.transform = `translateX(-${activeSlideIndex * carouselInner.offsetWidth}px)`;
    }

    // Добавление продукта в корзину
    let buttonAdds = carouselInner.querySelectorAll('.carousel__button');
    for (let button of buttonAdds) {
      button.addEventListener('click', function() {
        buttonAdds[activeSlideIndex].dispatchEvent(new CustomEvent("product-add", {
          detail: slides[activeSlideIndex].id,
          bubbles: true
        }));
      });
    }

  }
}
