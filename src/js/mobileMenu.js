const menuButtonEl = document.querySelectorAll('.header__button');
const menuEl = document.querySelector('.mobile-menu');
const menuLinksEl = document.querySelectorAll('.link');
const heroContainerEl = document.querySelector('.hero__container');

const toggleMenu = () => {
  menuEl.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');
  heroContainerEl.classList.toggle('hidden');
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

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
document.querySelector('.hero__button').addEventListener('click', e => {
  document.querySelector('.modal-window').classList.toggle('open-window');
  document.body.classList.toggle('no-scroll');
});
