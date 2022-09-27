(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-cow-open]'),
    closeModalBtn: document.querySelector('[data-cow-close]'),
    modal: document.querySelector('[data-modal-cow]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
