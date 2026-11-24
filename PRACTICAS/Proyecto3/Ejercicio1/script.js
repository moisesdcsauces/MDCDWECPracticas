const DOM_DESTINY = document.querySelector("#destino");
const DOM_FOTO = DOM_DESTINY.querySelector("#foto");
const DOM_DESTINY_A = DOM_DESTINY.querySelector("#informacion");
const DOM_BTN_RESERVA = DOM_DESTINY.querySelector("#reserva");

DOM_FOTO.setAttribute("src", "img/playa.jpg");
DOM_FOTO.setAttribute("alt", "Playa paradisíaca en Republica Dominicana");

DOM_DESTINY_A.setAttribute("href", "/playa");
DOM_DESTINY_A.removeAttribute("title");

let dataPrecio = Number(DOM_DESTINY.dataset.precio);
console.log("Precio para dos personas: " + (dataPrecio * 2) + "€");

DOM_DESTINY.dataset.tipoDestino = "playa";