// Obtiene todos los elementos con la clase carrito-icono
const carritoIconos = document.querySelectorAll('.carrito-icono');

// Agrega un evento de clic a cada elemento carrito-icono
for (const carritoIcono of carritoIconos) {
  carritoIcono.addEventListener('click', () => {
    // Agrega el producto al carrito de compras
    agregarItemAlCarrito(carritoIcono.parentNode.querySelector('h2').textContent, carritoIcono.parentNode.querySelector('p').textContent, carritoIcono.parentNode.querySelector('img').src);
  });
}
// Obtiene el elemento con la clase carrito-contador
const carritoContador = document.querySelector('.carrito-contador');

// Actualiza el contador del carrito
function actualizarCarritoContador() {
  // Obtiene el número de productos en el carrito
  const numeroProductosCarrito = carrito.length;

  // Actualiza el contador del carrito
  carritoContador.textContent = numeroProductosCarrito;
}

// Agrega un evento de cambio al carrito para actualizar el contador del carrito
carrito.addEventListener('change', actualizarCarritoContador);

// Actualiza el contador del carrito al cargar la página
actualizarCarritoContador();
