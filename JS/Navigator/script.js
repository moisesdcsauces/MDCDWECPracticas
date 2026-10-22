// 1. Muestra en consola el idioma principal y la lista de idiomas preferidos del navegador.
console.log("Idioma principal: "+navigator.language);

console.log("Idiomas preferidos: "+navigator.languages);
// 2. Utiliza un if para mostrar «Red disponible» o «Sin conexión» según navigator.onLine.
console.log(navigator.onLine ? "Red disponible":"Sin conexion");

// 3. Consulta si las cookies están habilitadas y muestra el resultado con una etiqueta.
console.log("Estado de las cookies: "+(navigator.cookieEnabled ? "Recien horneadas": "La masa esta pocha"));