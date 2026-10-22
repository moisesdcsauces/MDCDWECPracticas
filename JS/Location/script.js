// 1. Abre una página mediante un servidor local y muestra su URL completa en consola.
console.log("URL: "+location.href);

// 2. Muestra por separado protocol, hostname, port y pathname. Identifica cada parte en la barra de direcciones.
console.log("Protocolo: "+location.protocol);

console.log("Hostname: "+location.hostname);

console.log("Port: "+location.port);

console.log("Path: "+ location.pathname);

// 3. Por separado, navega a https://example.com asignando la dirección a location.href.
location.href="https://www.chromehearts.com/";