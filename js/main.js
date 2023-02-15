
// обработка нажатия на Каталог товаров
const catalogToggler = document.querySelector('.catalog-toggler');
const catalogPopup = document.querySelector('.catalog-popup');
catalogToggler.addEventListener('click', catalogTogglerHandler)

function catalogTogglerHandler(evt) {
  evt.preventDefault();

  catalogToggler.classList.toggle('catalog-toggler-active');
  catalogPopup.classList.toggle('popup-close');
}
