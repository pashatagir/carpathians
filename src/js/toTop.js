// import smoothscroll from 'smoothscroll-polyfill';

const backHomeEl = document.querySelector('.to-top');
const anchorEl = document.querySelectorAll('a[href^="#"]');

anchorEl.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    // smoothscroll.polyfill();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('scroll', () => {
  let y = window.scrollY;
  if (y < 1000 || document.body.classList.contains('no-scroll')) {
    backHomeEl.style.display = 'none';
  } else {
    backHomeEl.style.display = 'flex';
  }
});
