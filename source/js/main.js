var rateslink     = document.querySelector(".rates__button-show")
    modalrates    = document.querySelector(".rates-modal");
    modalclose    = document.querySelector(".rates-modal__button-close");
    menulink    = document.querySelector(".intro__menu");
    modalmenu    = document.querySelector(".menu-modal");

rateslink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalrates.classList.add("modal-show");
  console.log("открыли всплывашку");
});

modalclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalrates.classList.remove("modal-show");
  console.log("закрыли карту");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalrates.classList.contains("modal-show")){
      modalrates.classList.remove("modal-show");
    }
  }
});

menulink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalmenu.classList.add("modal-show");
  console.log("открыли всплывашку");
});

modalclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalmenu.classList.remove("modal-show");
  console.log("закрыли карту");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalmenu.classList.contains("modal-show")){
      modalmenu.classList.remove("modal-show");
    }
  }
});
