// 1. Muestra «Preparando partida» y programa «Partida lista» para dentro de 3 segundos.
console.log("Preparando partida");

setTimeout(()=>console.log("Partida lista"),3000);

// 2. Añade «Puedes seguir jugando» justo después de setTimeout(). Antes de ejecutar, predice el orden de los mensajes.
console.log("Puedes seguir jugando");

// 3. Crea una función avisar() y pásala a setTimeout para que muestre «Revisa tu inventario» tras 5 segundos.
function avisar(){
    console.log("Revisa tu inventario");
}

setTimeout(avisar, 5000);

// 4. Guarda su identificador y cancela este segundo aviso antes de que se ejecute.
let aviso = setTimeout(avisar, 5000);

clearTimeout(aviso);