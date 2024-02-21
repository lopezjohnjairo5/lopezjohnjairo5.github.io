  /* 
  las validaciones por hacer son:

  - En caso de repetirse restar sumar un error
  - verificar que no se tengan mas de 2 errores ya que al tercero
  se pierde el juego  
    */

  let displayErrors = document.getElementById('display-errors');
  let errors = 0;


  const restartErrors = () => {
    errors = 0;
    displayErrors.innerHTML = `${errors} / 3`;
  };

  const validateRowsColumnsIf = (iterE, indID, valueInp) => {
    let elementI = document.getElementById(iterE);
        // attE = elementI.hasAttribute("disabled"),
        result = false,
        passVal = 0;

    if (iterE !== indID) {        
      passVal = elementI.value;
      if (passVal == valueInp) {
        elementI.style.color = errorColor;
        result = true;
      }else{
        // if (attE) {
          elementI.style.color = letterColor;
        // } else {
        //   elementI.style.color = "black";
        // }
      }
    } else {
      elementI.style.color = letterColor;
    }
    return result;
  };


  const validateContentInput = (inp) => {
    /* 
    funcion encargada de validar el contenido
    de el input pasado por parametro.
    Verifica:
    - longitud max de 1 caracter
    - que sea igual a un numero del 1 al 9
    - que sea diferente a un texto o caracter especial (incluida la e)
     */
    let content = inp.value,
    regex = /^[1-9]{1}/,
    result = regex.test(content);
    if (!result || content.length > 1) {
      inp.value = '';
    }
  };

  const validateQuadrant3X3 = (inp) => {
    /*  
      funcion encargada de validar
      que el numero ingresado no se encuentre
      en el grupo de casillas 3x3 
    */
    let content = inp.value,
    contentId = inp.id,
    fatherElId = inp.parentNode.id,
    sons = [...inp.parentNode.children],
    result = false;

    for (let i = 0; i < sons.length; i++) {
      if (sons[i].id !== contentId) {
        if (sons[i].value == content && sons[i].value != "") {
          sons[i].style.color = errorColor;
          result = true;
        }else{
          sons[i].style.color = letterColor;
        }
      }
    }

    return result; // retornamos true cuando encontramos un numero repetido
  };

  const validateRowsNumbers = (inp) => {
    /* 
    funcion encargada de iterar por filas e ir 
    verificando que los numeros sean distintos al
    numero de la celda seleccionada | pasada por parametro
     */
    let [rowE,colE] = inp.id.split("-"),
    iterE = '',
    passV = false,
    resultV = false,
    valueInp = inp.value;

    for (let i = 1; i < 10; i++) {
      iterE =`${i}-${colE}`;
      // si la casilla a verificar es distinta a la que tiene focus entonces...
      passV = validateRowsColumnsIf(iterE, inp.id, valueInp);
      if (passV) {
        /* 
          debido a que se deben completar las iteracciones, no
          realizamos el retorno de passV al ser true,
          es por esto que nos apoyamos de resultV como
          variable de paso para dar fin a las iteraciones del for
          y luego retornar el valor que corresponda
        */
        resultV = true;
      }
    }
    return resultV;
  };

  const validateColumnsNumbers = (inp) => {
        /* 
    funcion encargada de iterar por columnas e ir 
    verificando que los numeros sean distintos al
    numero de la celda seleccionada | pasada por parametro
     */
    let [rowE,colE] = inp.id.split("-"),
    iterE = '',
    passV = false,
    resultV = false,
    valueInp = inp.value;

    for (let i = 1; i < 10; i++) {
      iterE =`${rowE}-${i}`;
      // si la casilla a verificar es distinta a la que tiene focus entonces...
      passV = validateRowsColumnsIf(iterE, inp.id, valueInp);
      if (passV) {
        /* 
          debido a que se deben completar las iteracciones, no
          realizamos el retorno de passV al ser true,
          es por esto que nos apoyamos de resultV como
          variable de paso para dar fin a las iteraciones del for
          y luego retornar el valor que corresponda
        */
        resultV = true;
      }
    }
    return resultV;
  };

  const updateErrorsDisplay = () => {
    /*  
    Funcion encargada de modificar la parte visual
    concerniente a los errores
    */
    errors += 1;
    displayErrors.innerHTML = `${errors} / 3`;
    if (errors >= 3) {
      openPopsGame(6); //abrimos el pop de perdiste.
      
      // invocamos funciones para restablecer el contador y pausamos los sonidos del juego
      restartSoundsAndTimer(loseSound);
    }
  };

  const winGameValidate = () => {
    /* 
    funcion encargada de verificar si el usuario ha ganado
    el juego.
    */
    let fullSudoku = JSON.stringify(matrizR),
        answersPlayer = JSON.stringify(matrizHC);

        if(fullSudoku == answersPlayer){
          let winInfodifficulty = document.getElementById('winInfodifficulty');
          let winInfoErrors = document.getElementById('winInfoErrors');
          let winInfoTime = document.getElementById('winInfoTime');
          let winInfoHelps = document.getElementById('winInfoHelps');

          winInfodifficulty.innerHTML = document.getElementById('display-dificult').innerHTML;
          winInfoErrors.innerHTML = displayErrors.innerHTML;
          winInfoTime.innerHTML = displayTime.innerHTML;
          winInfoHelps.innerHTML = countNumHelps.innerHTML;

          
          // invocamos funciones para restablecer el contador y pausamos los sonidos del juego
          restartSoundsAndTimer(winSound);
          openPopsGame(5);
        }
  };


  const restartSoundsAndTimer = (soundReplay) => {
    /* 
    funcion encargada de reproducir el sonido pasado por parametro 
    yy de pausar los sonidos de fondo y del reloj.
    Esta funcion esta destinada a usarse al perder o ganar la partida
    */
    replaySound(soundReplay); // reproducimos el sonido de perder partida
    pauseSound(backGSound); // pausamos la cancion de fondo
    clearTimer();
    reloadTime();
    pauseSound(clockSound);
  }