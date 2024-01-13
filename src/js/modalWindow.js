const openModalBtn = document.querySelectorAll('#js-open-modal');
const closeModalBtn = document.querySelectorAll('#js-close-modal');
const modalWindowEl = document.querySelectorAll('#js-modal-window');
const backDropEl = document.getElementById('js-backdrop');
const sectionToursEl = document.querySelector('.tours');
const backHomeEl = document.querySelector('.to-top');

function openModal(params) {
  if (params.includes('hero__button')) {
    modalWindowEl[0].style.transform = 'translateY(0%)';
    backDropEl.classList.add('active', 'backdrop--padding');
  }
  if (params.includes('tour__button')) {
    modalWindowEl[1].classList.add('open');
    backDropEl.classList.add('active');
    sectionToursEl.style.opacity = 0;
  }
  openModalBtn.forEach(btn => btn.classList.add('disabled'));
  document.body.classList.add('no-scroll');
  backHomeEl.style.display = 'none';
}

function closeModal() {
  modalWindowEl[0].style.transform = 'translateY(-100%)';
  modalWindowEl[1].classList.remove('open');
  sectionToursEl.style.opacity = 1;
  openModalBtn.forEach(btn => btn.classList.remove('disabled'));
  document.body.classList.remove('no-scroll');
  backDropEl.classList.remove('active', 'backdrop--padding');
}

function onEscPress(e) {
  if (e.code !== 'Escape') {
    return;
  }
  closeModal();
}

openModalBtn.forEach(item =>
  item.addEventListener('click', e => {
    openModal(e.target.getAttribute('class'));
  })
);

closeModalBtn.forEach(item => item.addEventListener('click', closeModal));

document.addEventListener('keydown', onEscPress);
