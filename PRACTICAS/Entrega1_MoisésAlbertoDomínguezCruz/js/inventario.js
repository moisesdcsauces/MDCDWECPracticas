//Clase Item.
class Item{
    constructor(name, description, quantity, maxStack){
        this.name = name.toLowerCase();
        this.description = description.toLowerCase();
        this._quantity = quantity;
        this.maxStack = maxStack;
    }

    set quantity(value){
        this._quantity = value;
    }

    get quantity(){
        return this._quantity;
    }

    showInfo(){
        console.log("Nombre: " + this.name);
        console.log("Descripcion: " + this.description);
        console.log("Cantidad: " + this.quantity);
        console.log("Máximo por objeto: " + this.maxStack);
    }

    compareTo(item){
        if(this.constructor === item.constructor){
            return this.name === item.name;
        } else return false;
    }
}

//Matriz de inventario. 4 filas y 9 columnas. Creacion de objetos y asignación a la matriz.
let inventario = Array(4).fill().map(x =>Array(9).fill());

let piedra = new Item("Piedra", "Una piedra.", 10, 64);
let manzana = new Item("Manzana", "Una manzana.", 16, 64);
let antorcha = new Item("Antorcha", "Una antorcha.", 32, 64);
let espadaDeDiamante = new Item("Espada de diamante", "Una espada de diamante.", 1, 1);
let picoDeHierro = new Item("Pico de hierro", "Un pico de hierro.", 1, 1);

inventario[0][0] = espadaDeDiamante;
inventario[0][1] = picoDeHierro;
inventario[0][2] = antorcha;
inventario[0][3] = manzana;
inventario[0][4] = piedra;

//Funciones

//Mostrar inventario completo. Muestra todos los objetos del inventario, con su nombre, descripción, cantidad y máximo por objeto.
function showInventory(){
    console.log("INVENTARIO COMPLETO");
    console.log("===================");

    for (let i = 0; i < inventario.length; i++) {
        let fila = "[";
        for (let j = 0; j < inventario[i].length; j++) {
            if (inventario[i][j] === undefined) {
                fila += "VACIO" + (j < inventario[i].length - 1 ? ", " : ""); // Comprobacion ultimo elemento
            } else {
                fila += inventario[i][j].name +"("+inventario[i][j].quantity+")" + (j < inventario[i].length - 1 ? ", " : "");
            }
        }
        fila += "]";
        console.log(fila);
    }
 
    //console.table(inventario);
}

//Mostrar barra de accesos rapidos. Muestra los objetos de la primera fila del inventario, con su nombre y cantidad.
function showQuickAccessBar(){
    console.log("BARRA DE ACCESOS RAPIDOS");
    console.log("========================");

    inventario[0].forEach((item, index) => {
        if(item === undefined){ // Comprobacion si el objeto es undefined, al preguntar si el item es distinto a undefined,
                                // el programa no entra en el if y lanza un error al intentar acceder a la propiedad name de un objeto undefined.
            console.log("Objeto " + (index + 1) + ": Vacío");
        } else {
            
            console.log("Objeto " + (index + 1) + ": " + item.name + " - Cantidad: " + item.quantity);
        }
    });
}

//Buscar un objeto. Busca un objeto por su nombre en el inventario y muestra si está en la matriz.
function searchItem(name){
    let encontrado = false;

    for (let i = 0; i < inventario.length; i++) {
        for (let j = 0; j < inventario[i].length; j++) {
            if (inventario[i][j] !== undefined && inventario[i][j].name === name.toLowerCase()) {
                console.log("Item encontrado: [" + i + "][" + j + "]");
                encontrado = true; // Uso de una flag para indicar que se encontró el objeto y evitar seguir buscando.
                break;
            }
        }
    }

    if (!encontrado) {
        console.log("Item no encontrado en el inventario.");
    }
}

//Añadir un objeto al inventario. Añade un objeto a la primera posición libre del inventario, si no hay huecos libres, muestra un mensaje.
function addItem(item){
    let cantidadRestante = item.quantity; // Cantidad restante del objeto a añadir.

    //Buscar huecos libres en el inventario.
    for(let i = 0;i<inventario.length;i++){
        for(let j = 0;j<inventario[i].length;j++){
            let slot = inventario[i][j];

            if(slot!== undefined && slot.name === item.name){ // Si el slot no es undefined y el nombre del objeto es igual al del slot, se puede mezclar.
                let espacioDisponible = slot.maxStack - slot.quantity; // Espacio disponible en el slot.
                let cantidadAAgregar = Math.min(cantidadRestante, espacioDisponible); // Cantidad a agregar al slot.

                slot.quantity += cantidadAAgregar;
                cantidadRestante -= cantidadAAgregar;

                console.log("Se han añadido " + cantidadAAgregar + " unidades de " + item.name + " al slot [" + i + "][" + j + "].");

                if(cantidadRestante <= 0){ // Si no queda cantidad restante, se sale.
                    return;
                }
            }
        }
    }

    //Si queda cantidad restante, busca huecos libres en el inventario.
    for(let i = 0;i<inventario.length;i++){
        for(let j = 0;j<inventario[i].length;j++){
            if(inventario[i][j] === undefined){ // Si el slot es undefined, se puede añadir el objeto.
                let cantidadEnEsteSlot = Math.min(cantidadRestante, item.maxStack); 
                inventario[i][j] = { ...item, quantity: cantidadEnEsteSlot }; // Nuevo objeto con la cantidad a añadir.

                cantidadRestante -= cantidadEnEsteSlot;

                console.log("Se han añadido " + cantidadEnEsteSlot + " unidades de " + item.name + " al slot [" + i + "][" + j + "].");

                if(cantidadRestante === 0){ // Si no queda cantidad restante, se sale.
                    return;
                }
            }
        }
    }

    if(cantidadRestante > 0){ // Si queda cantidad restante, significa que no hay huecos libres.
        console.log("No hay suficiente espacio en el inventario para añadir " + cantidadRestante + " unidades de " + item.name + ".");
    }
}

// Mover un objeto. Mueve un objeto de una posición a otra en el inventario, si la posición de destino está ocupada, se intercambian los objetos.
function moveItem(){
    let posicionOrigen = prompt("Introduce la posición de origen (fila,columna): ");
    let posicionDestino = prompt("Introduce la posición de destino (fila,columna): ");

    let [filaOrigen, columnaOrigen] = posicionOrigen.split(",").map(Number); // Convertir a numeros
    let [filaDestino, columnaDestino] = posicionDestino.split(",").map(Number); // Convertir a numeros

    if (inventario[filaOrigen][columnaOrigen] === undefined){
        alert("No hay ningún objeto en la posición de origen.");
        return;
    }

    //Si el destino está vacio, se mueve el objeto
    if(inventario[filaDestino][columnaDestino] === undefined){
        inventario[filaDestino][columnaDestino] = inventario[filaOrigen][columnaOrigen];
        inventario[filaOrigen][columnaOrigen] = undefined;
        console.log("Objeto movido de [" + filaOrigen + "][" + columnaOrigen + "] a [" + filaDestino + "][" + columnaDestino + "].");
    }else{
        // Sino se intercambian los objetos.
        let objetoTemporal = inventario[filaDestino][columnaDestino];
        
        inventario[filaDestino][columnaDestino] = inventario[filaOrigen][columnaOrigen];
        inventario[filaOrigen][columnaOrigen] = objetoTemporal;
        
        console.log("Objetos intercambiados entre [" + filaOrigen + "][" + columnaOrigen + "] y [" + filaDestino + "][" + columnaDestino + "].");
    }

    console.log("Movimiento de objetos completado.");

    console.table(inventario);
}

// Eliminar un objeto. Elimina un objeto de una posición en el inventario, si la posición está vacía, muestra un mensaje.


// Mostrar huecos libres. Muestra las posiciones vacías del inventario.


// Mostrar objeto mas abundante. Muestra el objeto con la mayor cantidad en el inventario.


//Menu de opciones.
do{
    opcion = prompt("INVENTARIO"+
        "\n================================"+
        "\n1. Mostrar inventario completo "+
        "\n2. Mostrar barra de accesos rapidos"+
        "\n3. Buscar un objeto"+
        "\n4. Añadir un objeto al inventario"+
        "\n5. Mover un objeto"+
        "\n6. Eliminar un objeto"+
        "\n7. Mostrar huecos libres"+
        "\n8. Mostrar el objeto mas abundante"+
        "\n0. Salir"+
        "\n================================"+
        "\nElige una opción: "
    );

    switch(opcion){
        case "1":
            showInventory();
            break;
        case "2":
            showQuickAccessBar();
            break;
        case "3":
            let nombre = prompt("Introduce el nombre del objeto a buscar: ");
            searchItem(nombre);
            break;    
        case "4":
            let nombreItem = prompt("Introduce el nombre del objeto a añadir: ");
            let descripcionItem = prompt("Introduce la descripción del objeto a añadir: ");
            let cantidadItem = parseInt(prompt("Introduce la cantidad del objeto a añadir: "));
            let maxStackItem = parseInt(prompt("Introduce el máximo por objeto del objeto a añadir: "));
            let itemNuevo = { name: nombreItem.toLowerCase(), description: descripcionItem.toLowerCase(), quantity: cantidadItem, maxStack: maxStackItem };
            addItem(itemNuevo);
            break;
        case "5":
            moveItem();
            break;
        case "6":
            break;
        case "7":
            break;
        case "8":
            break;
        default:
            console.log("Opción no válida");
        break;
    }
}while(opcion != 0);
