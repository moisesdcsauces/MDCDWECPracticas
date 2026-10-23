// 1. Trabaja en una página servida por HTTP y crea la cookie «personaje=Alex» con path=/.
document.cookie = "personaje=Steve; path=/";

// 2. Consulta document.cookie y localiza la cookie que acabas de crear.
console.log(document.cookie);

// 3. Actualiza esa misma cookie a «personaje=Steve», manteniendo path=/ y añadiendo expires con una fecha futura.
document.cookie = "personaje=Alex; path=/; expires=Fri 23 Oct 2027 13:47:00 GMT";

// 4. Recarga y comprueba el valor. Después elimina solo esa cookie asignándole una fecha pasada y el mismo path.
console.log(document.cookie);