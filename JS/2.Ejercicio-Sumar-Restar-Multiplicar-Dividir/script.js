let option = prompt("¿Qué operación deseas realizar? (sumar, restar, multiplicar, dividir, resto o potencia)");

let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

const sumar = (n1, n2) => n1 + n2;
const restar = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1/n2;
const resto = (n1, n2) => n1 % n2;
const potencia = (n1, n2) => n1 ** n2;

switch (option) {
    case "sumar":
        alert(sumar(num1,num2));
        break;
    case "restar":
        alert(restar(num1,num2));
        break;
    case "multiplicar":
        alert(multiplicar(num1,num2));
        break;
    case "dividir":
        alert(dividir(num1,num2));
        break;
    case "resto":
        alert(resto(num1,num2));
        break;
    case "potencia":
        alert(potencia(num1,num2));
    break;
    default:
        alert("Opción incorrecta.");
}