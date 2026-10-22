// 1. Muestra en consola el ancho y el alto de screen con el formato «Pantalla: ancho x alto».
console.log(screen.width);

console.log(screen.height);

// 2. Muestra availWidth y availHeight con la etiqueta «Espacio disponible».
console.log(screen.availWidth);

console.log(screen.availHeight);

// 3. Reduce el tamaño de la ventana y vuelve a consultar los cuatro valores.
console.log('Pantalla: ${screen.width} x ${screen.height}');

console.log('Espacio disponible: ${screen.availWidth} x ${screen.availHeight}');