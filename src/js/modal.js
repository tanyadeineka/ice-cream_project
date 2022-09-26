(() => {
  const refs = {
    openOneBtn: document.querySelector('[data-one-open]'),
    openTwoBtn: document.querySelector('[data-two-open]'),
    openThreelBtn: document.querySelector('[data-three-open]'),
    closeModalBtn: document.querySelector('[data-product-close]'),
    modal: document.querySelector('[data-product]'),
  };

  refs.openOneBtn.addEventListener('click', toggleModal);
  refs.openTwoBtn.addEventListener('click', toggleModal);
  refs.openThreelBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();