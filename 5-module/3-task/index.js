function initCarousel() {
  const buttonRight = document.querySelector('.carousel__arrow_right');
  const buttonLeft = document.querySelector('.carousel__arrow_left');
  const carouselInner = document.querySelector('.carousel__inner');
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
    if (direction === 'left') {
      activeSlideIndex--;
    } else if (direction === 'right') {
      activeSlideIndex++;
    }
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
}
