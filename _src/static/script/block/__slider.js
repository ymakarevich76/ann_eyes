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

  loop: true,
  spaceBetween: 23,
  slidesPerView: 1,

  breakpoints: {
    426: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    1440: {
      slidesPerView: 4,
    }
  },
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

const bigSlider = new Swiper('.slider-big__container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '" > ' + (index + 1) + '</span>';
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,

  slidesPerView: 1,
  initialSlide: 1,
});
