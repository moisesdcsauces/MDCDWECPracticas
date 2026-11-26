const DOM_LI_DELIVER = document.querySelector("#pendientes");
const DOM_LI_READ = document.querySelector("#leer");
let newLi = document.createElement("li");

newLi.textContent = "Probar el código";

DOM_LI_DELIVER.before(newLi);

DOM_LI_READ.remove();