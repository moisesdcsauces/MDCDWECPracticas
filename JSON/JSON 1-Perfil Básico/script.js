// Declaramos la variable global donde guardaremos el jugador/perfil
let player = null;

// Ejecutamos la petición fetch
fetch("./perfil.json")
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error de red: No se pudo cargar el archivo (Código ${response.status})`);
    }
    return response.json();
  })

  .then(data => {
    if (!data || typeof data.nivel !== 'number') {
      throw new Error("Validación fallida: 'nivel' no existe o no es un número.");
    }
    return data;
  })

  .then(data => {
    player = data;
    console.log("¡Datos cargados!");
    console.log("Nombre del jugador:", player.nombre);
    console.log("Nivel actual:", player.nivel);
  })
  .catch(error => console.error('Error en el proceso:', error.message));