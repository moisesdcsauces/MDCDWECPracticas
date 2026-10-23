// 1. Guarda tu nombre en la clave «practica_nombre» y un número de monedas en «practica_monedas» de localStorage.
localStorage.setItem("practica_nombre","Moisés Alberto");

localStorage.setItem("practica_monedas",1500);

// 2. Recarga la página y recupera ambos datos. Comprueba con typeof el tipo del valor recuperado para las monedas.
console.log(typeof(localStorage.getItem("practica_nombre"))+": "+localStorage.getItem("practica_nombre"));

console.log(typeof(localStorage.getItem("practica_monedas"))+": "+localStorage.getItem("practica_monedas"));

// 3. Convierte las monedas con Number(), suma 10 y guarda el nuevo total. Recarga para verificarlo.
let monedas = Number(localStorage.getItem("practica_monedas"));

// 4. Elimina solo tus dos claves con removeItem(). Consulta una de ellas y utiliza un if para detectar que ya no existe.

localStorage.removeItem("practica_nombre");

if (localStorage.getItem("practica_nombre")!=null){
    console.log("Practica nombre existe");
}else{
    console.log("Practica nombre NO existe");
}