var maplink          = document.querySelector(".active-map");
contactlink      = document.querySelector(".active-contact");
popcontact       = document.querySelector(".popup-write-us");
popmap           = document.querySelector(".popup-map");
closemap         = document.querySelector(".button-close-map");
closeform        = document.querySelector(".button-close-form");
form             = popcontact.querySelector("form");
fname             = popcontact.querySelector("#user-name");
email            = popcontact.querySelector("#user-email");
textarea         = popcontact.querySelector("#user-msg");


maplink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popmap.classList.add("popup-show");
  console.log("открыли карту");
});

contactlink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popcontact.classList.add("popup-show");
  console.log("открыли форму");
});


closemap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popmap.classList.remove("popup-show");
  console.log("закрыли карту");
});
closeform.addEventListener("click", function (evt) {
  evt.preventDefault();
  popcontact.classList.remove("popup-show");
  popcontact.classList.remove("modal-error");
  console.log("закрыли форму");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popmap.classList.contains("popup-show")){
      popmap.classList.remove("popup-show");
    }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popcontact.classList.contains("popup-show")){
      popcontact.classList.remove("popup-show");
      popcontact.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!fname.value || !email.value || !textarea.value) {
    evt.preventDefault();
    popcontact.classList.remove("modal-error");
    popcontact.offsetWidth = popcontact.offsetWidth;
    popcontact.classList.add("modal-error");
    console.log("Нужно ввести имя, пчтовый адрес и описание");
    }
  });
