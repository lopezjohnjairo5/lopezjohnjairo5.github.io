let inputsTxt = document.getElementById('board-game'),
    btnsNums = document.getElementById('nums'),    
    /*     
    obtenemos los ids independientes de todos los inputs del tablero de juego  
    para usarlos mas adelante, se hace esto para que no se requiera crear instancias, referencias , objs 
    mas adelante ya que esto puede disminuir el rendimiento del juego a futuro*/
    
    [s1,s2,s3,s4,s5,s6,s7,s8,s9] = inputsTxt.children,
    elementsCells = [
        ...s1.children,
        ...s2.children,
        ...s3.children,
        ...s4.children,
        ...s5.children,
        ...s6.children,
        ...s7.children,
        ...s8.children,
        ...s9.children];

    inputsCells = {};
    elementsCells.forEach( el => inputsCells[el.id] = document.getElementById(el.id));

    idInputFocus = 0;

const drawBackcolorInputs = (coolor='#00ABE7' ,tab, objC) => {
        // pintando cruz
        let [row, column] = tab.split('-');

        // despintamos todas las celdas antes de pintar las nuevas    
        for(el in objC){
            if(objC[el].hasAttribute("disabled")){
                objC[el].style.backgroundColor = disableColor;
            } else {
                objC[el].style.backgroundColor = enabledColor;
            }
            objC[el].style.border= '1px dotted gray';
        };

        // pintamos toda la fila y la  columna desplazandonos por celdas    
        for (let c = 1; c < 10; c++) {
            objC[`${row}-${c}`].style.backgroundColor = coolor;
            objC[`${c}-${column}`].style.backgroundColor = coolor;
        }
};

const functionValidations = (element, event) => {
    /* 
    funcion encargada de llamar a las funciones de
    validacion.
    */
    // validando el contenido del input seleccionado
    validateContentInput(element);

    // validando el contenido en casillas 3x3
    let resultValQ = validateQuadrant3X3(element);
    
    // verificando repeticiones por fila y columna
    let resultValR = validateRowsNumbers(element);
    let resultValC = validateColumnsNumbers(element);

    // restamos vida si se encontró el mismo numero en alguna fila, columna o casilla 3x3
    if (event.code !== 'Backspace' && event !== "Clean") {
        if (resultValQ || resultValR || resultValC) {
           // sonido
           replaySound(errorSound); //restablece el sonido al inicio y lo reproduce
           updateErrorsDisplay(); // actualiza la cantidad de errores que tiene el usuario 
        } else {
           // sonido
           replaySound(correctSound); //restablece el sonido al inicio y lo reproduce
        }        
    }


};


const saveAnswerUser = (el) =>{
    /* funcion encargada de almacenar la respuesta del
    usuario en la matriz copia de los huecos */
    // matrizHC
    let [row, col] = el.id.split("-"),
        val = el.value != NaN && el.value != '' ? el.value : 0;
    matrizHC[row-1][col-1] = parseInt(val);
/*     viewMatriz(matriz);
    viewMatriz(matrizHC); */
};

inputsTxt.addEventListener( 'click', (e) => {
    /* 
    inputsTxt 
    escucha encargada de verificar los clicks sobre los inputs
    del tablero de juego
    */
    let t = e.target.id;
    if(t !== '' && t !== null){
        // almacenamos el id del ultimo input seleccionado
        idInputFocus = document.getElementById(e.target.id);
        // pintando la cruz guia
        drawBackcolorInputs(selectColor,t,inputsCells);
    }

});

inputsTxt.addEventListener('keyup', (e) => {
   /*funcion encargada de llamar a las funcionde de
   validacion cuando se suelta una tecla
   */
    let element = e.target;
    functionValidations(element,e); //pasamos el input objetivo y el evento para que se verifique si se presionó backspace
    saveAnswerUser(element); // almacenamos la respuesta del usuario en la copia
    winGameValidate(); // verificamos si el usuario ya ganó 
});

inputsTxt.addEventListener('keydown', (e) => {
    /* 
    Funcion encargada de limpiar el input antes de introducir un
    nuevo valor 
    */
    e.target.value = '';
});


btnsNums.addEventListener( 'click', (e) => {
    /* 
    btnsNums
    escucha encargada de verificar cada click en
    los btns dispuestos para poner los numeros del 1-9 
    en el ultimo input seleccionado
    */
    e.preventDefault();
    let targetObject = e.target,
        idNum = e.target.id,
        num = 0;

    // validamos que se de click a un btn, de esta manera evitamos
    // que se genere un error al dar click entre los btns por accidente
    if (targetObject.tagName === "BUTTON") {
        if(idNum !== '' && idNum !== null){
            idInputFocus.value = e.target.getAttribute('data-value');
            idInputFocus.focus();
            functionValidations(idInputFocus,e);
            saveAnswerUser(idInputFocus); // almacenamos la respuesta del usuario en la copia
            winGameValidate(); // verificamos si el usuario ya ganó
        }
    }
} );

