import { refs } from './refs';

const {
  openModalButtons,
  closeModalButtons,
  modalWindowEls,
  inputCheckEls,
  backdropEl,
  sectionEl,
  backHomeEl,
  modalWindowEl,
  inputCheckEl,
} = refs;

function openModalCall(param, check) {
  inputCheckEls.forEach(el => el.removeAttribute('checked'));
  modalWindowEls.forEach(item => item.classList.remove('open'));
  inputCheckEl(check).setAttribute('checked', true);
  modalWindowEl(param).style.transform = 'translateY(0%)';
  if (window.innerHeight < 700) {
    backdropEl.classList.add('active', 'backdrop--padding-small');
  } else {
    backdropEl.classList.add('active', 'backdrop--padding');
  }
  document.body.classList.add('no-scroll');
  backHomeEl.style.display = 'none';
}

function openModalTour(param) {
  modalWindowEl(param).classList.add('open');
  backdropEl.classList.add('active');
  sectionEl.style.opacity = 0;
  document.body.classList.add('no-scroll');
  backHomeEl.style.display = 'none';
}

function openModal(param, check) {
  if (param === 'call-me') {
    openModalCall(param, check);
    return;
  }
  openModalTour(param);
}

function closeModal() {
  modalWindowEls[0].style.transform = 'translateY(-100%)';
  modalWindowEls.forEach(item => item.classList.remove('open'));
  sectionEl.style.opacity = 1;
  document.body.classList.remove('no-scroll');
  backdropEl.classList.remove('active', 'backdrop--padding', 'backdrop--padding-small');
}

function onEscPress(e) {
  if (e.code !== 'Escape') {
    return;
  }
  closeModal();
}

openModalButtons.forEach(item =>
  item.addEventListener(
    'click',
    e => {
      const action = e.target.getAttribute('data-action');
      const check = e.target.getAttribute('data-check');
      openModal(action, check);
    },
    [{ once: true }]
  )
);

closeModalButtons.forEach(item => item.addEventListener('click', closeModal, [{ once: true }]));

document.addEventListener('keydown', onEscPress);
