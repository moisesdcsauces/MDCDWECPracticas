# Simulador de Inventario (Minecraft) en JS ES6

Este proyecto es una simulación de consola del sistema de inventario clásico de un jugador de Minecraft, desarrollado completamente en JavaScript (Vanilla JS).

## 1. Objetivo de la práctica

El objetivo principal es desarrollar una aplicación en **JavaScript ES6** que simule la gestión de un inventario. Esta práctica sirve para integrar y asimilar de forma práctica los siguientes conceptos de programación:
- Declaración de variables y tipos de datos.
- Operadores y estructuras de control (`if/else`, bucles `for`, `do...while`).
- Manejo avanzado de Arrays y Matrices bidimensionales.
- Funciones regulares y Arrow Functions.
- Programación Orientada a Objetos (POO): Clases, objetos, constructores, métodos y métodos de acceso (`getters` y `setters`).

## 2. Planteamiento

El sistema central del inventario se representa mediante una **matriz bidimensional de objetos**. 
Cada posición (coordenada) de la matriz actúa como un hueco o *slot* del inventario. Estos huecos pueden contener una instancia de un objeto (instanciado a partir de una clase) o estar completamente vacíos (`null` / `undefined`).

- **Barra de accesos rápidos (Hotbar):** Representada por la primera fila de la matriz (fila `0`).
- **Inventario principal:** Representado por el resto de filas de la matriz.
  
## 3. Clase Item

La base de todos los elementos almacenables es la clase `Item`. Cada objeto que se guarda en la matriz es una instancia de esta clase.

| Propiedad | Descripción |
| :--- | :--- |
| `nombre` | String. Nombre del objeto (ej. "Pico de hierro"). |
| `descripcion` | String. Breve descripción del objeto. |
| `cantidad` | Number. Número actual de unidades almacenadas en ese hueco específico (stack). |
| `maxStack` | Number. Número máximo de unidades permitidas de ese objeto en un solo hueco (límite del stack). |

## 4. Creación del Inventario

El sistema inicializa una matriz de **4 filas y 9 columnas** (un total de 36 huecos).
Por defecto, todas las posiciones vacías se inicializan vacías. Para facilitar el entorno de pruebas de la aplicación, el programa comienza con los siguientes objetos pre-cargados en la barra de accesos rápidos:

* **Piedra:** stack máximo de 64.
* **Manzana:** stack máximo de 64.
* **Antorcha:** stack máximo de 64.
* **Espada de diamante:** stack máximo de 1.
* **Pico de hierro:** stack máximo de 1.

## 5. Menú Principal y Funciones

La aplicación cuenta con un menú interactivo por consola controlado por un bucle `do...while`, que mantiene el programa en ejecución hasta que el usuario decida salir (opción 0).

Las funciones integradas en el programa son las siguientes:

* **Mostrar inventario completo:** Recorre toda la matriz y muestra de forma visual el contenido de cada hueco. Si está vacío indica "VACÍO", si tiene un objeto, muestra su nombre y cantidad actual.
* **Mostrar barra de accesos rápidos:** Muestra exclusivamente el contenido de la primera fila de la matriz (`inventario[0]`).
* **Buscar un objeto:** Solicita el nombre de un objeto y rastrea la matriz. Devuelve las coordenadas `[fila][columna]` exactas donde se encuentra.
* **Añadir un objeto al inventario:** Permite insertar un nuevo objeto. La lógica primero busca si existe un *stack* del mismo tipo que no esté lleno para agruparlo (respetando el `maxStack`). Si no cabe o no existe, busca la primera posición vacía en la matriz para colocarlo.
* **Mover un objeto:** Permite al usuario introducir unas coordenadas de origen y unas de destino. Si el destino está vacío, mueve el objeto; si está ocupado, intercambia las posiciones de ambos objetos.
* **Eliminar un objeto:** Pide unas coordenadas y, previa confirmación por pantalla, elimina el objeto de esa posición, dejando el hueco libre.
* **Mostrar huecos libres:** Recorre todo el inventario contabilizando y devolviendo el número exacto de *slots* que aún están vacíos.
* **Mostrar el objeto más abundante:** Busca en toda la matriz y devuelve el *stack* individual que contenga la mayor cantidad de unidades acumuladas en un solo hueco.

## 6. Estructura de archivos

El proyecto sigue una estructura básica de separación de responsabilidades:

```text
📁 Entrega1_MoisésAlberto
 ├── 📄 index.html       # Archivo principal que carga el script
 ├── 📄 README.md        # Documentación del proyecto
 └── 📁 js
      └── 📄 inventario.js  # Lógica principal, clases y funciones
```

## 8. Herramientas y Tecnologias utilizadas

* **JavaScript (ES6):** Lenguaje principal utilizado para toda la logica de la aplicacion.
* **HTML5:** Estructura basica para la ejecucion del script en el entorno del navegador.
* **Visual Studio / VS Code:** Entorno de Desarrollo Integrado (IDE) utilizado para escribir y organizar el codigo.
* **W3Schools:** Utilizado como documentacion principal y material de consulta tecnica.
* **Gemini (IA):** Utilizado como apoyo para resolver dudas o bugs, para lluvia de ideas, comprension profunda de los conceptos y asistencia en la depuracion y buenas practicas de codigo.

---
**Autor:** Moisés Alberto Domínguez Cruz