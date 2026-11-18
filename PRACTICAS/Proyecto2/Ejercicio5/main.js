const elementosLista = document.querySelectorAll("#producto .caracteristicas li");
const caracteristicas = Array.from(elementosLista).map(li => li.textContent);

let producto = {
    name: "Mochila",
    description: "Mochila de clase",
    price: 24.5,
    characteristics: caracteristicas
};

console.log(producto);


function actualizarFicha() {
    const nombreEl = document.querySelector("#producto .nombre");
    const descripcionEl = document.querySelector("#producto .descripcion");
    const precioEl = document.querySelector("#producto .precio");
    const listaItemsEl = document.querySelectorAll("#producto .caracteristicas li");

    nombreEl.textContent = producto.name;
    descripcionEl.textContent = producto.description;

    precioEl.textContent = producto.price.toFixed(2) + " €";

    listaItemsEl.forEach((li, index) => {
        li.textContent = (index + 1) + ". " + producto.characteristics[index];
    });
}

actualizarFicha();
actualizarFicha();