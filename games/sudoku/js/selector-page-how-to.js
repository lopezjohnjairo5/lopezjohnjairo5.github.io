const btnsSelectorPageHowTo = document.getElementById('selector-pages-how-to');
const btnsHowGamingPages = document.getElementsByClassName('how-gaming-pages');

const childsBtns = btnsSelectorPageHowTo.children; // btns cambio pagina


const changeColorBtnPages = () => {
    for (const el of childsBtns) {
        el.style.backgroundColor= disabledBtnColor;
    }
};

const hiddeShowPagesHowTo = () => {
    for (const el of btnsHowGamingPages) {
        if(!el.classList.contains("hidden")){
            el.classList.add("hidden");
        }
    }
};

btnsSelectorPageHowTo.addEventListener('click',(e) => {
    let element = e.target;
    let [,part2] = element.id.split('btn-');
    let pageView = document.getElementById(part2);

    if(element.tagName == 'BUTTON'){
        
        // cambiando el color de los btns
        changeColorBtnPages(); // gris para los que no se han seleccionado
        element.style.backgroundColor = enabledBtnColor; // azul para el seleccionado

        // ocultamos las ventanas que no queremos ver
        hiddeShowPagesHowTo();

        // mostramos la ventana asociada al btn
        if(pageView.classList.contains("hidden")){
            pageView.classList.remove("hidden");
        }
    }
});