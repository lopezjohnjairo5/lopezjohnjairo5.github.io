let galeryInfo =  lang == "es" ? models_es : models_en; // presente en galery-projects-lang.js

let btnsTabs = document.getElementById('btns-projects'),
    btnBack = document.getElementById('btn-back'),
    btnNext = document.getElementById('btn-next'),
    img = document.getElementById('img-1')
    imgGalDescription = document.getElementById('img-gal-description'),
    posA = 0; // posicion actual dentro del array o galeria

const putInfoGal = (index = 0) => {
    // ponemos el 1er valor en la galeria
    img.setAttribute("src",galeryInfo[index][0]);
    content = galeryInfo[index][1]; //titulo
    content += galeryInfo[index][2]; // descripcion
    imgGalDescription.innerHTML = content;
};

const chageColorTabs = (tabActive) => {
    svgE = document.getElementsByClassName("svg-btn-tabs");
    for (let i = 0; i < svgE.length; i++) {
        el = svgE[i].id;
        tab = el.split("svg-tab-");
        if (tab[1] == tabActive) {
            document.getElementById(el).style.fill = "yellow"; 
        } else {
            document.getElementById(el).style.fill = "white";
        }
        
    }
};

btnsTabs.addEventListener("click", (e) =>{
    /*
    escucha encargada de trabajar con los tabs btns de la galeria
    */
    let idEl = e.target.closest(".btns-projects").id,
    el = idEl.split("btn-tab-");
    // definimos que array usaremos para llenar la galeria
    switch (idEl) {
        case 'btn-tab-3d':
            galeryInfo =  lang == "es" ? models_es : models_en;
            break;
        case 'btn-tab-web':
            galeryInfo =  lang == "es" ? web_es : web_en;
            break;
        case 'btn-tab-game': 
            galeryInfo =  lang == "es" ? juegos_es : juegos_en;           
            break;
    }
    // ponemos la primera imagen del btn presionado
    putInfoGal(0);
    chageColorTabs(el[1]);      
});


btnBack.addEventListener("click", (e) => {
    if (posA > 0) {
        posA--; // decrementamos
        putInfoGal(posA);
    }

});
btnNext.addEventListener("click", (e) => {
    if (posA < galeryInfo.length - 1) {
        posA++; // incrementamos
        putInfoGal(posA);
    }

});
