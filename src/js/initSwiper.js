import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';

const swiper = new Swiper('.swiper__gallery', {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  spaceBetween: 15,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperTours = new Swiper('.swiper__tours', {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  spaceBetween: 15,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

if (window.innerWidth >= 1440) {
  swiperTours.disable();
  swiperTours.destroy(false, true);
}

const swiperTour = new Swiper('.swiper__modal', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
