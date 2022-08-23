function handleCart() {
  const elements = document.querySelectorAll('.closeable');
  const body = document.querySelector('body');
  const cart = document.querySelector('.cart');
  for (let i of elements) {
    i.classList.toggle('closed');
    cart.classList.contains('closed')
      ? body.removeAttribute('style')
      : body.setAttribute('style', 'overflow:hidden');
  }
}
