const DOM_INPUT_NAME = document.getElementById("nombre");
const DOM_INPUT_PRICE = document.getElementById("precio");
const DOM_INPUT_QUANTITY = document.getElementById("cantidad");
const DOM_RESUME = document.getElementById("resumen");

let total = DOM_INPUT_PRICE.value * DOM_INPUT_QUANTITY.value;

console.log("Cantidad total: "+total.toFixed(2));

if(DOM_INPUT_NAME == null || DOM_INPUT_PRICE != Number || DOM_INPUT_QUANTITY>0){
    
}