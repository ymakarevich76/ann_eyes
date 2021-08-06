const swiper = new Swiper('.reviews-slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 3,
  centeredSlides: true,
  initialSlide: 3,
  loop: true,
});

const imgSlider = new Swiper('.image-slider__container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 4,
  loop: true,
  spaceBetween: 23,
});

const videoSlider = new Swiper('.video-slider__container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
});

