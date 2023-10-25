// Recupera los datos del carrito.
const listCards = JSON.parse(localStorage.getItem("listCards"));

// Recupera los datos del cliente.
const name = document.querySelector("input[name='name']").value;
const lastName = document.querySelector("input[name='lastName']").value;
const cedula = document.querySelector("input[name='cedula']").value;
const referenceNumber = document.querySelector("input[name='referenceNumber']").value;

// Crea la factura.
const invoice = `
  <h1>Factura</h1>

  <table>
    <thead>
      <tr>
        <th>Producto</th>
        <th>Cantidad</th>
        <th>Precio</th>
        <th>Subtotal</th>
      </tr>
    </thead>
    <tbody>
      ${listCards.map((product, index) => `
        <tr>
          <td>${product.name}</td>
          <td>${product.quantity}</td>
          <td>$${product.price}</td>
          <td>$${product.quantity * product.price}</td>
        </tr>
      `)}
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">Total</td>
        <td>$${listCards.reduce((acc, product) => acc + product.quantity * product.price, 0)}</td>
      </tr>
    </tfoot>
  </table>
`;

// Agrega los datos del cliente a la factura.
invoice += `
  <h2>Datos del cliente</h2>
  <p>Nombre: ${name}</p>
  <p>Apellido: ${lastName}</p>
  <p>Cédula: ${cedula}</p>
  <p>Número de referencia de pago: ${referenceNumber}</p>
`;

// Muestra la factura.
const element = document.querySelector("#invoice");
element.innerHTML = invoice;