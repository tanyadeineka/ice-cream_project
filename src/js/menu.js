(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const menuList = document.querySelector('.mobile-menu');
  function removeMenu() {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('modal-open');
  }
  const toggleMenu = () => {
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  };
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  menuList.addEventListener('click', removeMenu);
  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
