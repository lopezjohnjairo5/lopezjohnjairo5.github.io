/*
control de navbar
*/

let navItems = document.getElementById("navbar-items"),
    elements = document.getElementsByClassName("goto"),
    btnHomeProject = document.getElementById("btn-home-goto-project");

const hiddeShowElements = (seeElement) => {
        element = seeElement;
        
    for (let i = 0; i < elements.length; i++) {
        el = elements[i].dataset.go;
        if (el == element) {
            document.getElementById(el).style.display = "flex";
            elements[i].parentNode.style.backgroundColor = "rgba(69,69,69,1)";
        } else {
            document.getElementById(el).style.display = "none";
            elements[i].parentNode.style.backgroundColor = "#FFB633";
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