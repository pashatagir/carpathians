import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';

const swiper = new Swiper('.swiper__gallery', {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  spaceBetween: 15,
  centeredSlides: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperTour = new Swiper('.swiper__modal', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
  },
});
