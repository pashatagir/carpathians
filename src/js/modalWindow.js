const openModalBtn = document.getElementById('js-open-modal');
const modalWindowEl = document.getElementById('js-call-me');
const backDropEl = document.getElementById('js-backdrop');
const closeModalBtn = document.getElementById('js-close-modal');

function openModal() {
  modalWindowEl.classList.add('open');
  document.body.classList.add('no-scroll');
  backDropEl.classList.add('active');
  openModalBtn.classList.add('disabled');
}

function closeModal() {
  modalWindowEl.classList.remove('open');
  document.body.classList.remove('no-scroll');
  backDropEl.classList.remove('active');
  openModalBtn.classList.remove('disabled');
}

function onEscPress(e) {
  if (e.code !== 'Escape') {
    return;
  }
  closeModal();
}

openModalBtn.addEventListener('click', openModal);

closeModalBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', onEscPress);
