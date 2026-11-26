const DOM_HIGHLIGHTS = document.querySelector(".destacado");
const DOM_LI = DOM_HIGHLIGHTS.parentElement;
const DOM_SECTION = DOM_HIGHLIGHTS.closest("section");
const priLi = DOM_LI.previousElementSibling;
const desLi = DOM_LI.nextElementSibling;

console.log("LI anterior: "+priLi.textContent.trim());
console.log("LI posterior: "+desLi.textContent.trim());

console.log("LI actual: "+DOM_LI.matches(".actual"));

console.log(DOM_SECTION.children);

console.log(DOM_SECTION.childNodes);

console.log(priLi.previousElementSibling);