import { refs } from './refs';
const { menuButtonEls, menuLinkEls, menuEl, heroContainerEl } = refs;

const toggleMenu = () => {
  menuEl.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');
  heroContainerEl.classList.toggle('visually-hidden');
  [menuButtonEls[0], menuButtonEls[1]].forEach(button =>
    button.classList.toggle('visually-hidden')
  );
  menuLinkEls[0].style.zIndex = document.body.classList.contains('no-scroll') ? 1 : '';
  menuLinkEls[0].style.transform = document.body.classList.contains('no-scroll')
    ? 'translateX(62px)'
    : '';
};

menuButtonEls.forEach(item => item.addEventListener('click', toggleMenu));

menuLinkEls.forEach(item =>
  item.addEventListener('click', () => {
    if (!document.body.classList.contains('no-scroll')) return;
    toggleMenu();
  })
);
