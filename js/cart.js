const cartItem = document.querySelector('#cart-item');

window.addEventListener('click', function (event) {
  if (event.target.hasAttribute('data-cart')) {
    const card = event.target.closest('.item');

    const productInfo = {
      id: 1,
      // imgSrc: card.querySelector('.item__image').getAttribute('src')
      title: card.querySelector('.item__title').innerText,
      price: card.querySelector('.item-new-price').innerText,
      counter: 1,
    };

    const itemInCart = cartItem.querySelector(`[data-id="${productInfo.id}"]`);
    console.log(itemInCart);

    if (itemInCart) {
      const counterElement = itemInCart.querySelector('[data-counter]');
      console.log(counterElement);
      counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
      const priceElement = itemInCart.querySelector('.cart-price');
      console.log(priceElement);
      priceElement.innerText = parseInt(priceElement.innerText) + parseInt(productInfo.price);
    } else {
      const cartItemHTML = `<div class="header__cart" data-id="${productInfo.id}">
              <a href="#" class="button button--cart">
                <img src="./img/cart-icon.svg" alt="cart" />
                <span class="cart-price">${productInfo.price}</span>
                <span class="cart-counter" data-counter="">${productInfo.counter}</span>
              </a>
            </div>`;

      cartItem.insertAdjacentHTML('beforeend', cartItemHTML);
    }
  }
});
