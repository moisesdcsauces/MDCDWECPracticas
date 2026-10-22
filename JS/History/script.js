// 1. En una misma pestaña, visita tres páginas distintas escribiendo sus direcciones. Consulta history.length.
location.href="https://amazon.es";

location.href="https://youtube.com";

location.href="https://google.com";

// 2. Desde la tercera página, ejecuta history.back(). Comprueba a qué página vuelves.
history.back()

console.log(history.length);

// 3. Ejecuta history.forward() y después history.go(-2). Haz cada prueba por separado y observa el resultado.
history.forward();
history.go(-2);
history.go(2);