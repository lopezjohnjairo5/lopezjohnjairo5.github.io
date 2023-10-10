let models = [
    ["./public/img/proyects/3d/craneo.png","<h3>Craneo</h3>","<p>Modelo realizado con software Blender version 2.8.<br>Modelo para <b>impresión 3D</b>.</p>"],
    ["./public/img/proyects/3d/crash_1.png","<h3>Crash</h3>","<p>Personaje de la saga de videojuegos Crash Bandicoot. Modelado realizado en software Blender. <br>Modelo para <b>impresión 3D</b>.</p>"],
    ["./public/img/proyects/3d/sociales.png","<h3>Llaveros</h3>","<p>Modelos de llaveros de redes sociales. Modelado realizado en software Blender. <br>Modelo para <b>impresión 3D</b>.</p>"]
];

let web = [
    ["./public/img/proyects/inmobiliaria/Inicio.png","<h3>Inmobiliaria</h3>","Creación de página web inmobiliaria. Cuenta con sistemas de busqueda integrados. Diseño: Software <b>Figma</b> ; Programación: <b>Html5, Css3, Php y Js vanilla</b>."],
    ["./public/img/proyects/portfolio/porfolio-home.png","<h3>Portfolio</h3>","Actualización del portafolio de servicios actual. Diseño: Software <b>Figma</b> ; Programación: <b>Html5, Css3, Php y Js vanilla</b>."],
    ["./public/img/proyects/ejercicios web/pokeapi.png","<h3>Pokeapi</h3>","Practica de CSS3 y consumo de APIS. Creada mediante <b>Html5, Css3 y Js vanilla</b>."],
    ["./public/img/proyects/restaurante/pl2_1.png","<h3>Restaurante</h3>","Creación de template web básico con enfoque para restaurantes. Cuenta con sistemas de busqueda, panel de administración, sistema de menú, btn de contacto whatsapp, entre otros. Diseño: <b>Proporcionado por el cliente</b> ; Programación: <b>Html5, Css3, Php y Js vanilla</b>."],
    ["./public/img/proyects/ejercicios web/generador_passwords.png","<h3>Generador passwords</h3>","Practica de algoritmia y Js. Creada mediante <b>Html5, Css3 y Js vanilla</b>."]
];

let juegos = [
    ["./public/img/proyects/juegos/game-page-movile-h.png","<h3>Juego Breaker</h3>","Juego web creado bajo demanda. Creado mediante <b>Html5, Css3 y Js vanilla</b>."]
];

let galeryInfo =  models;

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
    let idEl = e.target.closest(".btns-projects").id,
    el = idEl.split("btn-tab-");
        
    // definimos que array usaremos para llenar la galeria
    switch (idEl) {
        case 'btn-tab-3d':
            galeryInfo =  models;
            break;
        case 'btn-tab-web':
            galeryInfo =  web;
            break;
        case 'btn-tab-game': 
            galeryInfo =  juegos;           
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
