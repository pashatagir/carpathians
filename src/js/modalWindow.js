const openModalBtn = document.querySelectorAll('#js-open-modal');
const modalWindowEl = document.querySelectorAll('#js-modal-window');
const backDropEl = document.getElementById('js-backdrop');
const closeModalBtn = document.querySelectorAll('#js-close-modal');
const sectionToursEl = document.querySelector('.tours');

function closeModal() {
  modalWindowEl[0].style.transform = 'translateY(-100%)';
  modalWindowEl[1].classList.remove('open');
  sectionToursEl.style.display = 'block';
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
    if (e.target.classList.contains('hero__button')) {
      modalWindowEl[0].style.transform = 'translateY(0%)';
      openModalBtn.forEach(btn => btn.classList.add('disabled'));
      document.body.classList.add('no-scroll');
      backDropEl.classList.add('active', 'backdrop--padding');
    } else {
      modalWindowEl[1].classList.add('open');
      sectionToursEl.style.display = 'none';
      openModalBtn.forEach(btn => btn.classList.add('disabled'));
      document.body.classList.add('no-scroll');
      backDropEl.classList.add('active');
    }
  })
);

closeModalBtn.forEach(item => item.addEventListener('click', closeModal));

document.addEventListener('keydown', onEscPress);
