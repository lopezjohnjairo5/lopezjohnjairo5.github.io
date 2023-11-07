const switchMode = (valueMode) => {
    switch (valueMode) {
        case '0':
            document.documentElement.style.setProperty('--backgroundImage', 'url("../img/background-spiral.png")');
            document.documentElement.style.setProperty('--backgroundPage', 'url("../img/background.png")');
            document.documentElement.style.setProperty('--first-color', '#FFB633');
            document.documentElement.style.setProperty('--second-color', '#2C2C2C');
            document.documentElement.style.setProperty('--third-color', 'rgba(69,69,69,1)');
            document.documentElement.style.setProperty('--four-color', 'rgba(44,44,44,1)');
            document.documentElement.style.setProperty('--first-transparent-color', 'rgba(10,10,10,.5)');
            canvas.style.backgroundColor = '#FFB633';
            iconTitle.setAttribute('href',"public/img/ico-amarillo.ico");
            logoLoadPage.setAttribute('src',"public/img/logo-blanco-amarillo.png");
            break;
    
        default:
            document.documentElement.style.setProperty('--backgroundImage', 'url("../img/background-spiral2.png")');
            document.documentElement.style.setProperty('--backgroundPage', 'url("../img/background2.png")');
            document.documentElement.style.setProperty('--first-color', 'rgb(16,16,185)');
            document.documentElement.style.setProperty('--second-color', '#191919');
            document.documentElement.style.setProperty('--third-color', 'rgba(45,45,45,1)');
            document.documentElement.style.setProperty('--four-color', '#191919');
            document.documentElement.style.setProperty('--first-transparent-color', 'rgba(7,7,7,1)');
            canvas.style.backgroundColor = 'rgb(16,16,185)';
            iconTitle.setAttribute('href',"public/img/ico-azul.ico");
            logoLoadPage.setAttribute('src',"public/img/logo-blanco-azul.png");
            break;
    }
};

const changeModePage = () => {
    /*
    funcion encargada de cambiar el modo
    de visualizacion de la pagina, dark , light
    */
    valueMode = btnChangeMode.value;
    switchMode(valueMode);

};

btnChangeMode.addEventListener('change',(e)=>{
    changeModePage();
});
