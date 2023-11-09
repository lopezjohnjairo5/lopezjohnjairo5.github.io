window.addEventListener("contextmenu", (event) => {
    /*
    funcion encargada de evitar que se de clic derecho en la pagina.
    */
    event.preventDefault();
    console.log("no esta permitido el click derecho");
});

window.addEventListener("keydown", function (event) {
    // El parámetro del evento es del tipo KeyboardEvent
    if (event.keyCode == 123) {
        console.log(`la tecla presionada es: ${event.keyCode}`);
        event.preventDefault();
    }
});