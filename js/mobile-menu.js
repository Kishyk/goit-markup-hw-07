(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-js-open-menu]"),
    closeMenuBtn: document.querySelector("[data-js-close-menu]"),
    modal: document.querySelector("[data-js-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
