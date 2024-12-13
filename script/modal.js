'use strict';

const modal = document.querySelector('.callback-modal-backdrop');
const modalOpenTrigger = document.querySelector('.action.trigger-modal');
const modalCloseTrigger = document.querySelector('.callback-modal .close-modal');

const observer = new MutationObserver((mutations, observer) => {
  for (const mutation of mutations) {
    const {attributeName} = mutation;

    if (attributeName === 'class') {
      document.body.style.overflow = modal.classList.contains('is-open') ? 'hidden' : '';
    }
  }
});

observer.observe(modal, {
  attributes: true
});

modalCloseTrigger.addEventListener('click', () => {
  modal.classList.remove('is-open');
  document.body.style.overflow = 'hidden';
});

if (modalOpenTrigger) {
  modalOpenTrigger.addEventListener('click', () => {
    modal.classList.add('is-open');
    document.body.style.overflow = '';
  });
}

