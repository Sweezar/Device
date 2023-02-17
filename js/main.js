
// обработка нажатия на Каталог товаров
const catalogToggler = document.querySelector('.catalog-toggler');
const catalogPopup = document.querySelector('.catalog-popup');
catalogToggler.addEventListener('click', catalogTogglerHandler)

function catalogTogglerHandler(evt) {
  evt.preventDefault();

  catalogToggler.classList.toggle('catalog-toggler-active');
  catalogPopup.classList.toggle('popup-close');
}

// Обработка нажатия на корзину
const cart = document.querySelector('.cart-button');
const cartPopup = document.querySelector('.cart-popup');
cart.addEventListener('click', cartOpenHandler);

function cartOpenHandler(evt) {
  evt.preventDefault();

  cartPopup.classList.toggle('popup-close');
}

// Обработка открытия модального окна заказа
const deliveryButton = document.querySelector('.delivery-button');
const deliveryModal = document.querySelector('.modal-container');
deliveryButton.addEventListener('click', modalOpenHandler);

function modalOpenHandler(evt) {
  evt.preventDefault();

  window.addEventListener('keydown', escKeydownHandler);
  deliveryModal.classList.remove('modal-delivery-close');
}

// Закрытие модального окна
const modalCloseButton = document.querySelector('.modal-close-button');
modalCloseButton.addEventListener('click', modalCloseHandler);

function modalCloseHandler(evt) {
  evt.preventDefault();

  deliveryModal.classList.add('modal-delivery-close');
  window.removeEventListener('keydown', escKeydownHandler);
}

function escKeydownHandler(evt) {
  if (evt.key === 'Escape') {
    modalCloseHandler(evt);
  }
}

// Открытие дополнительной информации о количестве в модальном окне
const quantityInfoButton = document.querySelector('.delivery-form-label-quantity');
const quantityInfoPopup = document.querySelector('.quantity-info-popup');

quantityInfoButton.addEventListener('click', quantityInfoPopupOpenHandler);

function quantityInfoPopupOpenHandler(evt) {
  evt.preventDefault();

  quantityInfoPopup.classList.toggle('popup-close');
}

// Обработка увеличения/уменьшения количества при заказе
const minus = document.querySelector('.delivery-form-quantity-minus');
const plus = document.querySelector('.delivery-form-quantity-plus');
const quantity = document.querySelector('.delivery-form-field-quantity');

minus.addEventListener('click', quantityMinusHandler);

function quantityMinusHandler(evt) {
  evt.preventDefault();

  quantity.value > 0 ? quantity.value -= 1 : quantity.value = 0;
}

plus.addEventListener('click', quantityPlusHandler);

function quantityPlusHandler(evt) {
  evt.preventDefault();

  quantity.value = +quantity.value + 1;
}

// Переключение слайдера на главной странице
const sliders = document.querySelectorAll('.slider-container');
let viewSliderCount = 0;
const sliderButtons = document.querySelector('.slider-buttons-wrapper');
const sliderButtonPrev = sliderButtons.querySelector('.slider-button-prev');
const sliderButtonNext = sliderButtons.querySelector('.slider-button-next');

sliderButtons.addEventListener('click', sliderHandler);

function sliderHandler(evt) {
  if (evt.target === sliderButtonNext) {
    viewSliderCount === sliders.length - 1 ? viewSliderCount = 0 : viewSliderCount++;
    switchSlider();
  }
  if (evt.target === sliderButtonPrev) {
    viewSliderCount === 0 ? viewSliderCount = sliders.length - 1 : viewSliderCount--;
    switchSlider();
  }
}

function switchSlider() {
  sliders.forEach((elem, i) => {
    elem.classList.remove('slider-container-view');
    viewSliderCount == i ? elem.classList.add('slider-container-view'): '';
  });
}
