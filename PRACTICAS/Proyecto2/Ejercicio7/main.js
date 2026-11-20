const DOM_INPUT_NAME = document.getElementById("nombre");
const DOM_INPUT_PRICE = document.getElementById("precio");
const DOM_INPUT_QUANTITY = document.getElementById("cantidad");
const DOM_RESUME = document.getElementById("resumen");

const nombre = DOM_INPUT_NAME.value.trim();
const precioTexto = DOM_INPUT_PRICE.value.trim();
const cantidadTexto = DOM_INPUT_QUANTITY.value.trim();

const precio = Number(precioTexto);
const cantidad = Number(cantidadTexto);

if (nombre === "" || precioTexto === "" || cantidadTexto === "" || Number.isNaN(precio) || precio < 0 || Number.isNaN(cantidad) || cantidad <= 0 || !Number.isInteger(cantidad)) {
    DOM_RESUME.textContent = "Error: Revisa los datos. El nombre no puede estar vacío, el precio debe ser un número positivo y la cantidad un entero mayor que 0.";
} else {
    const total = precio * cantidad;
    DOM_RESUME.textContent = "Pedido: " + cantidad + " x " + nombre + " (" + precio.toFixed(2) + " €) — Total: " + total.toFixed(2) + " €";
}