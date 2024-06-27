const swiperImg = new Swiper('.swiperImg', {
  direction: 'horizontal',
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
})

const swiperText = new Swiper('.swiperText', {
  direction: 'horizontal',
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

const swiperPagination = new Swiper('.swiperPagination', {
  direction: 'horizontal',
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiperPagination-pagination',
  },
})
