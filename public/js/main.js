/*
control de navbar
*/

const hiddeShowElements = (seeElement) => {
        element = seeElement;
        
    for (let i = 0; i < elements.length; i++) {
        el = elements[i].dataset.go;
        if (el == element) {
            document.getElementById(el).style.display = "flex";
            //elements[i].parentNode.style.backgroundColor = modeItemColor;
        } else {
            document.getElementById(el).style.display = "none";
            //elements[i].parentNode.style.backgroundColor = modeItemColor;
            elements[i].style.color = "white";
        }
        
    } 
};

navItems.addEventListener("click", (e) =>{
    element = e.target.parentNode;
    console.log(element);
    if (element.tagName == 'A') {
        idEl = element.dataset.go;
        hiddeShowElements(idEl); 
    }
});

btnHomeProject.addEventListener("click", () => {
    hiddeShowElements("projects"); 
});