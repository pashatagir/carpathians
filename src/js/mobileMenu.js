const menuButtonEl = document.querySelectorAll('.header__button');
const menuEl = document.querySelector('.mobile-menu');
const menuLinksEl = document.querySelectorAll('.link');

const toggleMenu = () => {
  menuEl.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');
  [menuButtonEl[0], menuButtonEl[1]].forEach(button => button.classList.toggle('hidden'));
  menuLinksEl[0].style.zIndex = document.body.classList.contains('no-scroll') ? 1 : '';
};

menuButtonEl.forEach(item => item.addEventListener('click', toggleMenu));

menuLinksEl.forEach(item =>
  item.addEventListener('click', () => {
    if (!document.body.classList.contains('no-scroll')) return;
    toggleMenu();
  })
);
