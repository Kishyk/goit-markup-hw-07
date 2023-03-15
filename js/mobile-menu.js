(() => {
  const refs = {
    openMenuBtn: document.querySelector("[js-open-menu]"),
    closeMenuBtn: document.querySelector("[js-close-menu]"),
    modal: document.querySelector("[js-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
