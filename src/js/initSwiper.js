import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  spaceBetween: 15,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
