const DOM_LIST = document.querySelector("#recursos");
const DOM_LIST_RESOURCES = DOM_LIST.querySelectorAll("a");

console.log("Numero de elementos: "+DOM_LIST_RESOURCES.length);

let linksTexts = Array.from(DOM_LIST_RESOURCES, l => l.textContent.trim());

console.log(linksTexts);

let guideText = new Array();

linksTexts.forEach(l => {
    if(l.toLowerCase().includes("guía")){
        guideText.push(1);
    }
})

console.log(guideText);