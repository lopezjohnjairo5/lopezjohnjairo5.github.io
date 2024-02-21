let closeNewGame = document.getElementById('close-new-game'),
    closeReloadGame = document.getElementById('reload-game'),
    closeHowGaming = document.getElementById('close-how-gaming'),
    btnReload = document.getElementById('btn-reload'),
    selectDificult = document.getElementById('select-dificult'),
    popReloadGame = document.getElementById('reload-game'),
    howGaming = document.getElementById('how-gaming'),
    sudokuHowTo = document.getElementById('sudoku-how-to'),
    btnNewGame = document.getElementById('btn-new-game'),
    btnPause =  document.getElementById('btn-pause'),
    pauseGame = document.getElementById('pause-game'),
    btnContinueGame = document.getElementById('btn-continue-game'),
    winGame = document.getElementById('win-game'),
    loseGame = document.getElementById('lose-game'),
    soundConfig = document.getElementById('sound-config'),
    btnVolume = document.getElementById('btn-volume'),
    closeSoundConfig = document.getElementById('close-sound-config');
    
const closePopsGame = (el) => {
    // funcion encargada de cerrar ventana de seleccion de dificultad
    replaySound(clickBtnSound); // sonido de click en btn
    switch (el) {
        case 1:
            selectDificult.style.display = 'none';           
            break;
        case 2:
            popReloadGame.style.display = 'none';
            break;
        case 3:
            howGaming.style.display = 'none';
            break;    
        case 4:
            pauseGame.style.display = 'none';
            break;     
        case 5:
            winGame.style.display = 'none';
            break;     
        case 6:
            loseGame.style.display = 'none';
            break;     
        case 7:
            soundConfig.style.display = 'none';
            break;         
        default:
            break;
    }
    
};

const openPopsGame = (el) => {
    // funcion encargada de cerrar ventana de seleccion de dificultad
    replaySound(clickBtnSound); // sonido de click en btn
    switch (el) {
        case 1:
            selectDificult.style.display = 'flex';           
            break;
        case 2:
            popReloadGame.style.display = 'flex';
            break;
        case 3:
            howGaming.style.display = 'flex';
            break;
        case 4:
            pauseGame.style.display = 'flex';
            break;   
        case 5:
            winGame.style.display = 'flex';
            break;     
        case 6:
            loseGame.style.display = 'flex';
            break;
        case 7:
            soundConfig.style.display = 'flex';
            break;                         
        default:
            break;
    }
    
};

btnNewGame.addEventListener('click', () => {
    // abrir ventana de seleccion de dificultad
    // selectDificult.style.display = 'flex';
    // let resultNG = confirm("Iniciar nuevo juego?");
    // if (resultNG) {
        openPopsGame(1);
        if (closeNewGame.classList.contains("hidden")) {
            closeNewGame.classList.remove("hidden");
        }
        // detenemos el timer para que no corra el tiempo (PAUSA)
        clearTimer();
    // }
});


btnReload.addEventListener('click', () => {
    // abrir ventana de seleccion de dificultad
    // popReloadGame.style.display = 'flex';
    openPopsGame(2);
});

sudokuHowTo.addEventListener('click', () => {
    // abrir ventana de como jugar
    // howGaming.style.display = 'flex';
    openPopsGame(3);
    
    // detenemos el timer para que no corra el tiempo (PAUSA)
    clearTimer();
});

btnPause.addEventListener('click', () => {
    // limpiar intervalo para frenar tiempo
    clearTimer();
    // abrir ventana de pausa
    openPopsGame(4);
});


closeNewGame.addEventListener('click', () => {
    // cerrar ventana de seleccion de dificultad
    closePopsGame(1);
    // reactivamos el timer del tiempo
    timeCount();
});


closeReloadGame.addEventListener('click', () => {
    // cerrar ventana de reinicio juego
    closePopsGame(2);
});

closeHowGaming.addEventListener('click', () => {
    // crear intervalo para continuar tiempo
    timeCount();
    // cerrar ventana de como jugar
    closePopsGame(3);
});

btnContinueGame.addEventListener('click', () => {
    // crear intervalo para continuar tiempo
    timeCount();
    // cerrar ventana de pausa
    closePopsGame(4);
});

btnVolume.addEventListener('click', () => {
    /* abrir ventana pop de configuracion de volumen */
    openPopsGame(7);
});

closeSoundConfig.addEventListener('click', () => {
    // cerrar ventana de configuracion de volumen
    closePopsGame(7);
});
