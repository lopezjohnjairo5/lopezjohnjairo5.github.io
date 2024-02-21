// variables de uso global, 
// matriz = usada para poner el sudoku en el tablero (tiene huecos), y para reiniciar el sudoky actual 
// matrizHC = copia de la matriz con huecos (para ir llenandola cada vez que el user introduce un num), 
// matrizR = matriz completa, utilizada para comparar con matrizHC y determinar si hay ganador
let matriz,
    matrizHC,
    matrizR;

let displayDificult = document.getElementById('display-dificult');


const moveThreeElement = (fr) => {
    /* 
    funcion encargada de mover al final los 3 primeros valores del 
    array pasado por parametro
     */
    let passArray = [...fr];
    for (let i = 0; i < 3; i++) {
        passArray.push(fr[i]);
        passArray.shift();
    }
    return passArray;
};

const moveOneElement = (fr) => {
    /* 
    funcion encargada de mover al final el primero valor del 
    array pasado por parametro
     */
    let passArray = [...fr];
    passArray.push(fr[0]);
    passArray.shift();
    return passArray;
};

const switchColumnsAndRows = (c, mt) => {
    /* 
    funcion encargada de
    intercambiar 2 columnas de la matriz pasada por
    parametro  c,mt
    */
    let minC = 0,
    maxC = 0,
    minF = 0,
    maxF = 0,
    passC = 0;
    passF = 0;    

    switch (c) {
    case 1:
        minC = Math.round(Math.random() * (1 - 0) + 0);
        maxC = Math.round(Math.random() * (2 - 1) + 1);
        minF = Math.round(Math.random() * (1 - 0) + 0);
        maxF = Math.round(Math.random() * (2 - 1) + 1);
        break;

    case 2:
        minC = Math.round(Math.random() * (4 - 3) + 3);
        maxC = Math.round(Math.random() * (5 - 4) + 4);
        minF = Math.round(Math.random() * (4 - 3) + 3);
        maxF = Math.round(Math.random() * (5 - 4) + 4);
        break;

    case 3:
        minC = Math.round(Math.random() * (7 - 6) + 6);
        maxC = Math.round(Math.random() * (8 - 7) + 7);        
        minF = Math.round(Math.random() * (7 - 6) + 6);
        maxF = Math.round(Math.random() * (8 - 7) + 7);
        break;
   }

   for (let i = 0; i < mt.length; i++) {
        passC = mt[i][minC];
        mt[i][minC] = mt[i][maxC];
        mt[i][maxC] = passC;
    }

    for (let i = 0; i < mt.length; i++) {   
        passF = mt[minF][i];
        mt[minF][i] = mt[maxF][i];
        mt[maxF][i] = passF;
    }

};

const createHoles = (d, mt) => {
    /* 
        funcion encargada de poner
        ceros en la matriz pasada por parametro 
    */
    let countHoles = 0,
        rowB = 0,
        colB = 0,
        countH = 0;

    switch (d) {
        case '0':
            countHoles = Math.round(Math.random() * (25 - 10) + 10);
            break;

        case '1':            
            countHoles = Math.round(Math.random() * (40 - 25) + 25);
            break;

        case '2':     
           countHoles = Math.round(Math.random() * (55 - 40) + 40);         
            break;

        case '3':     
            countHoles = Math.round(Math.random() * (70 - 55) + 55);         
             break;    
    }

    // for (let j = 0; j < countHoles; j++) {
    while (countH < countHoles){
        rowB = Math.round(Math.random() * (8 - 0) + 0);
        colB = Math.round(Math.random() * (8 - 0) + 0);
        if (mt[rowB][colB] != 0) {
            mt[rowB][colB]= 0;
            countH ++;
        }
    }

    // creando copía de la matriz con huecos
    matrizHC = [
        [...mt[0]],
        [...mt[1]],
        [...mt[2]],
        [...mt[3]],
        [...mt[4]],
        [...mt[5]],
        [...mt[6]],
        [...mt[7]],
        [...mt[8]]
    ]
};

const putNumbers = (mt) => {
/*  
    funcion encargada de poner los numeros
    en el tablero de juego
*/
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let el = document.getElementById(`${i+1}-${j+1}`); 
            if (mt[i][j] !== 0) {
                el.value = mt[i][j];
                el.setAttribute('disabled','true');
                el.style.color = letterColor;
                el.style.backgroundColor = disableColor;
            } else {
                el.value = '';
                el.removeAttribute('disabled');
                el.style.color = letterColor;
                el.style.backgroundColor = enabledColor;
            }
        }
    }
};

const viewMatriz = (mt) => {
    /* 
    funcion encargada de mostrar en la consola del 
    inspector la matriz pasada por parametro
    NO INFLUYE EN EL DESARROLLO DEL JUEGO, 
    SE PUEDE ELIMINAR SIN PROBLEMA */
    mt.forEach( (el) => {
        console.log(el);
    });
    console.log('\n-----------------\n');
};

const updateViewDificult = (valueE) => {
    /* let displayDificult = document.getElementById('display-dificult'); */ 

    switch (valueE) {
        case '0':
            displayDificult.innerHTML = "Muy Fácil";
            break;
        case '1':
            displayDificult.innerHTML = "Fácil";
            break;
        case '2':
            displayDificult.innerHTML = "Medio";
            break;
        case '3':
            displayDificult.innerHTML = "Difícil";
            break;
    }
};

const mainGame = () => {
    /* 
    funcion principal del juego
    encargada de llamar a todo lo necesario para crear un
    nuevo juego de sudoku 
    */

    // primeras 3 filas del sudoku
    const firstRow = [1,2,3,4,5,6,7,8,9].sort(() => { return Math.random() - 0.5});
    const secondRow = moveThreeElement(firstRow);
    const thirdRow = moveThreeElement(secondRow);

    // filas 4-5-6 del sudoku
    const fourRow = moveOneElement(firstRow);
    const fiveRow = moveOneElement(secondRow);
    const sixRow = moveOneElement(thirdRow);

    // filas 7-8-9 del sudoku
    const sevenRow = moveOneElement(fourRow);
    const eightRow = moveOneElement(fiveRow);
    const nineRow = moveOneElement(sixRow);

    matriz = [
        [...firstRow],
        [...secondRow],
        [...thirdRow],
        [...fourRow],
        [...fiveRow],
        [...sixRow],
        [...sevenRow],
        [...eightRow],
        [...nineRow]
    ];

    // mezclando filas y columnas para evitar patrones en los numeros
    switchColumnsAndRows(1, matriz);
    switchColumnsAndRows(2, matriz);
    switchColumnsAndRows(3, matriz);

    // matriz final, utilizada para comparar las respuestas del usuario
    matrizR = [
        [...matriz[0]],
        [...matriz[1]],
        [...matriz[2]],
        [...matriz[3]],
        [...matriz[4]],
        [...matriz[5]],
        [...matriz[6]],
        [...matriz[7]],
        [...matriz[8]]
    ];

    // obteniendo dificultad del juego
    let elDificult = document.getElementsByName('game-dificult'),
        dificult = 1;
    
    elDificult.forEach(element => {
        if (element.checked == true) {
            dificult = element.value;
            updateViewDificult(dificult);
        }
    });

    // agregando huecos al sudoku    
    createHoles(dificult, matriz);

    // poniendo los numeros en el tablero
    putNumbers(matriz);

    //viendo el contenido de las matrices en la consola
/*     // viewMatriz(matriz);
    viewMatriz(matrizR); 
    viewMatriz(matrizHC); */
    
}


let sendDificult = document.getElementById('send-dificult');
let btnWinGame = document.getElementById('btn-win-game');
let btnLoseGame = document.getElementById('btn-lose-game');

// cargando sonidos
let backGSound = loadMusic("./sounds/background.mp3",true);
let correctSound = loadMusic("./sounds/correct.mp3",false);
let errorSound = loadMusic("./sounds/error.mp3",false);
let winSound = loadMusic("./sounds/win.mp3",false);
let loseSound = loadMusic("./sounds/lose.mp3",false);
let clickBtnSound = loadMusic("./sounds/click.mp3",false);
let clockSound = loadMusic("./sounds/clock.mp3",true);

// volumen inicial de los sonidos
configVolumeSounds();

sendDificult.addEventListener('click', () => {
    replaySound(clickBtnSound); // sonido de click en btn
    closePopsGame(1);
    mainGame();
    // invocamos funciones para restablecer el contador en caso de que se estuviera ejecutando
    clearTimer();
    reloadTime();
    timeCount();

    //ejecutando audio
    replaySound(backGSound); //restablece el sonido al inicio y lo reproduce  

    //restablecemos los errores
    restartErrors();

    // restableciento las ayudas
    restartSudokuHelps();
});

btnWinGame.addEventListener('click', () => {
    /* 
    Al ganar el juego, abrimos el pop de seleccion de dificultad
    */

    closePopsGame(5);
    openPopsGame(1);
    if (!closeNewGame.classList.contains("hidden")) {
        closeNewGame.classList.add("hidden");
    }
});

btnLoseGame.addEventListener('click', () => {
    /* 
    Al perder el juego, abrimos el pop de seleccion de dificultad
    */
    closePopsGame(6);
    openPopsGame(1);
    if (!closeNewGame.classList.contains("hidden")) {
        closeNewGame.classList.add("hidden");
    }
});