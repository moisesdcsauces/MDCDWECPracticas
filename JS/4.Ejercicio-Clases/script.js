class Producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

let teclado = new Producto("Teclado", 29.99, 15);
let raton = new Producto("Raton",14.50, 30);

console.log(teclado, raton);

let suma = teclado.stock + raton.stock;
console.log("La suma de los stocks es: " + suma);

