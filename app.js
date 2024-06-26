const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',

  navigation: {
    // Navigation arrows
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
})
