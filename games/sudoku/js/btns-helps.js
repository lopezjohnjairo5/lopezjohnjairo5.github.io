/*  
    programar el funcionamiento de los 
    btns de borrar y la ayuda poner numero
*/
let sudokuClean = document.getElementById('sudoku-clean');
let sudokuHelp = document.getElementById('sudoku-help');
let countNumHelps = document.getElementById('count-num-helps');
let helpsSuccess = parseInt(countNumHelps.innerHTML);

sudokuClean.addEventListener('click', (e) => {
    idInputFocus.value = "";
    functionValidations(idInputFocus,"Clean");
    saveAnswerUser(idInputFocus); // almacenamos la respuesta del usuario en la copia
});

sudokuHelp.addEventListener('click', () => {
    /* 
    funcion de ayuda 
    encargada de poner un numero
    en una casilla vacia
    */
    helpsSuccess -= 1; // disminuimos la cantidad de ayudas disponibles
   
    [ row, col ] = idInputFocus.id.split("-");
    idInputFocus.value = matrizR[row-1][col-1]; // ponemos en el input el valor segun la matriz completa    
    countNumHelps.innerHTML = helpsSuccess;

    
    functionValidations(idInputFocus,""); //pasamos el input objetivo y el evento para que se verifique si se presionó backspace
    saveAnswerUser(idInputFocus); // almacenamos la respuesta del usuario en la copia
    winGameValidate(); // verificamos si el usuario ya ganó 
    
    if(helpsSuccess < 1 ){
        sudokuHelp.setAttribute('disabled',true);
    }
    
});

const restartSudokuHelps = () => {
    helpsSuccess = 3;
    countNumHelps.innerHTML = helpsSuccess;
    sudokuHelp.removeAttribute('disabled');
};