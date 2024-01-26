import { refs } from './refs';
const { menuButtonEls, menuLinkEls, menuEl, socialListEl } = refs;

const toggleMenu = () => {
  menuEl.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');
  socialListEl.style.flexDirection = window.innerHeight < 700 ? 'row' : 'column';
};

menuButtonEls.forEach(item => item.addEventListener('click', toggleMenu));

menuLinkEls.forEach(item =>
  item.addEventListener('click', () => {
    if (!document.body.classList.contains('no-scroll')) return;
    toggleMenu();
  })
);
