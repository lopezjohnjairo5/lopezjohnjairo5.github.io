const animationLoadPage = () => {
    animationClose = setInterval(()=>{
        console.log(`color1.clientHeight = ${color1.clientHeight}`);
        //console.log(`color1.clientHeight/3 = ${color1.clientHeight/3}`);
        try {
            if (color1.clientHeight >= minValue ) {
                //loadPage.style.height = `${loadPage.clientHeight-changeSize}px`;
                color1.style.height = `${color1.clientHeight-changeSize}px`;
                color2.style.height = `${color2.clientHeight-changeSize}px`;
                // cambiando opacidad de load
                opacityValue -= valueChangeOpacity;
                loadPage.style.opacity  = opacityValue.toString();
                // cambiando opacidad de page
                pageOpacity += valueChangeOpacity;
                page.style.opacity = pageOpacity.toString();
            } else {
                loadPage.style.display = "none";
                clearInterval(animationClose);
            }            
        } catch (error) {
            loadPage.style.display = "none";
            clearInterval(animationClose);
        }

    },50);
}

loadPage.addEventListener('animationend',()=>{
    /*
    funcion de encargada de mostrar la pantalla de carga antes de mostrar el contenido del sitio
    */
   //animationend
   //loadPage.style.display = "none";
   animationLoadPage();
});

window.addEventListener('load',()=>{
    /*
    funcion encargada de inicializar el contenido segun la hora actual
    */
    const d = new Date();
    let hour = d.getHours();
    if (hour >= 18 || hour < 6) {
        // inicializa en modo oscuro la pagina
        switchMode('1');
        btnChangeMode.setAttribute('value','1'); // cambia el value y posicion del btn de seleccion de modo
    } else {
        // inicializa en modo claro la pagina
        btnChangeMode.setAttribute('value','0'); // cambia el value y posicion del btn de seleccion de modo
        switchMode('0');
    }
});
