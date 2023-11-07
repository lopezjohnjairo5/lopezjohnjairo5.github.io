/*
funciones encargadas de gestionar el idioma a mostrar
*/

let selectorLang = document.getElementById('selector-lang'); 

const readJsonLang = async (nameJson) => {
    /*
    funcion encargada de cambiar el texto,
    segun el idioma seleccionado, el cual es el mismo nombre del archivo JSON
    */
    jsonPathName = `./public/js/languages/${nameJson}.json`;
    const requestJson = await fetch(jsonPathName); // obteniendo el contenido del JSON
    const content = await requestJson.json(); // convirtiendo el contenido a algo legible

    // recorriendo los elementos marcados con data-type para obtener los valores y poner lo correspondiente del JSON seleccionado
    for (const element of textChange) {
        type = element.dataset.type;
        value = element.dataset.value;
        element.innerHTML = content[type][value];
    }
};

/*funcion de escucha*/
selectorLang.addEventListener('click',(e) => {
    e.preventDefault();
    targ = e.target;
    if(targ.tagName == 'A'){
        valLang = targ.dataset.lang;
        document.documentElement.lang = valLang; // cambiamos el idioma de la pagina web
        lang = valLang;
        galeryInfo =  lang == "es" ? models_es : models_en; // definimos cual matriz de info usar para la galeria, ingles o español 
        putInfoGal(); // volvemos a poner la primera imagen de la galeria
        readJsonLang(valLang); // invocamos la funcion encargada de cambiar el contenido de la web
    }
});