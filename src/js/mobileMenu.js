import { refs } from './refs';
const { menuButtonEls, menuLinkEls, menuEl } = refs;

const toggleMenu = () => {
  menuEl.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');
};

menuButtonEls.forEach(item => item.addEventListener('click', toggleMenu));

menuLinkEls.forEach(item =>
  item.addEventListener('click', () => {
    if (!document.body.classList.contains('no-scroll')) return;
    toggleMenu();
  })
);
