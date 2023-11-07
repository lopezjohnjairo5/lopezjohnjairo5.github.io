let galeryInfo =  lang == "es" ? models_es : models_en; // presente en galery-projects-lang.js

let btnsTabs = document.getElementById('btns-projects'),
    btnBack = document.getElementById('btn-back'),
    btnNext = document.getElementById('btn-next'),
    img = document.getElementById('img-1')
    imgGalDescription = document.getElementById('img-gal-description'),
    posA = 0; // posicion actual dentro del array o galeria

let bgColor = window.innerWidth > 720 ? "#2C2C2C" : "rgba(255,255,255,.1)",
    bgDisabledColor = window.innerWidth > 720 ? "gray" : "rgba(0,20,0,.1)";

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

const workTabsGalery = () => {
    /*
    caracteristicas generales que se aplican al dar click en una tab o al redimensionar
    */
    // ponemos la primera imagen del btn presionado
    putInfoGal(0);      

    // habilitamos los btns next y back
    posA = 0; // reiniciamos la posicion de la galeria cada vez que damos clic en una tab
    enabledDisabledBtn(btnBack, btnNext, posA);
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
        case 'btn-tab-desktop':
            galeryInfo =  lang == "es" ? desktop_es : desktop_en;           
            break;
    }

    chageColorTabs(el[1]);

    // invocamos funcion con contenido general al redimensionar o al dar click en tab
    workTabsGalery();
});


btnBack.addEventListener("click", (e) => {
    if (posA > 0) {
        posA--; // decrementamos
        putInfoGal(posA);
        enabledDisabledBtn(btnBack, btnNext, posA);
    }

});
btnNext.addEventListener("click", (e) => {
    if (posA < galeryInfo.length - 1) {
        posA++; // incrementamos
        putInfoGal(posA);
        enabledDisabledBtn(btnNext, btnBack, posA);
    }

});

const stateBtn = (btn, state, color) => {
    btn.disabled = state;        
    btn.style.backgroundColor = color;
};

const enabledDisabledBtn = (btnC, btnO, pos) => {
    /*funcion encargada de habilitar | deshabilitar el btn de la galeria pulsado.*/
    
    if(galeryInfo.length == 1){
        stateBtn(btnC, true, bgDisabledColor);
        stateBtn(btnO, true, bgDisabledColor);
    }else if (pos == 0 || pos == galeryInfo.length - 1) {
        stateBtn(btnC, true, bgDisabledColor);
        stateBtn(btnO, false, bgColor);
    } else {
        stateBtn(btnC, false, bgColor);
        stateBtn(btnO, false, bgColor);
    }
};

window.addEventListener('resize', () => {
    // asignamos un valor cada vez que se cambia el tamaño de la pantalla
    bgColor = window.innerWidth > 720 ? "#2C2C2C" : "rgba(255,255,255,.1)",
    bgDisabledColor = window.innerWidth > 720 ? "gray" : "rgba(0,20,0,.1)";
    // invocamos funcion con contenido general al redimensionar o al dar click en tab
    workTabsGalery();
});