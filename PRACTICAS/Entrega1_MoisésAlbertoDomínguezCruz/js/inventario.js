//Clase Item.
class Item{
    constructor(name, description, quantity, maxStack){
        this.name = name;
        this.description = description;
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
        if(item !== 0){
            console.log("Objeto " + (index + 1) + ": " + item.name + " - Cantidad: " + item.quantity);
        } else {
            console.log("Objeto " + (index + 1) + ": Vacío");
        }
    });
}


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
            
        default:
            console.log("Opción no válida");
        break;
    }
}while(opcion != 0);
