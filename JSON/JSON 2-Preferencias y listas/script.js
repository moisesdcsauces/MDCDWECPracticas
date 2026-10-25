let preferencias = null;

fetch("./preferencias.json")
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error al cargar el archivo: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    if (!data || typeof data.usuario !== 'string' || !Array.isArray(data.favoritos)) {
      throw new Error("Validación fallida: El formato del JSON no es válido.");
    }
    return data;
  })
  .then(data => {
    preferencias = data;
    
    console.log("Primer idioma:", preferencias.idiomas[0]);

    console.log("Lugares favoritos:");
    preferencias.favoritos.forEach((lugar, index) => {
      console.log(`- Favorito ${index + 1}: ${lugar}`);
    });
    
    preferencias.favoritos.push("Montaña");
    
    preferencias.volumen = 40;
    
    preferencias.sonido = false;

    console.log("Modificaciones aplicadas correctamente en memoria.");
    
    const jsonActualizado = JSON.stringify(preferencias, null, 2);
    console.log("Nuevo JSON generado:\n", jsonActualizado);

    const objetoComprobacion = JSON.parse(jsonActualizado);

    console.log("\nComprobación de tipos tras el ciclo completo:");
    console.log("- Tipo de 'sonido':", typeof objetoComprobacion.sonido, `(${objetoComprobacion.sonido})`);
    console.log("- Tipo de 'volumen':", typeof objetoComprobacion.volumen, `(${objetoComprobacion.volumen})`);
    console.log("- ¿favoritos sigue siendo un array?:", Array.isArray(objetoComprobacion.favoritos));
    console.log("- Lista actualizada de favoritos:", objetoComprobacion.favoritos);
  })
  .catch(error => console.error('Error en el proceso de preferencias:', error.message));