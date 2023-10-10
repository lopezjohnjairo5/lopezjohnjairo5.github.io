/*
control de navbar
*/

let navItems = document.getElementById("navbar-items"),
    btnHomeProject = document.getElementById("btn-home-goto-project");

const hiddeShowElements = (seeElement) => {
    let elements = document.getElementsByClassName("goto"),
        element = seeElement;
        
    for (let i = 0; i < elements.length; i++) {
        //console.log(`i: ${i}`);
        el = elements[i].dataset.go;
        if (el == element) {
            document.getElementById(el).style.display = "flex";
        } else {
            document.getElementById(el).style.display = "none";
        }
        
    } 
};

navItems.addEventListener("click", (e) =>{
    element = e.target;
    if (element.tagName == 'A') {
        idEl = element.dataset.go;
        hiddeShowElements(idEl); 
    }

});

btnHomeProject.addEventListener("click", () => {
    hiddeShowElements("projects"); 
});