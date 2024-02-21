/* 
programar btns del menu
- pausar | play -- se activa desde open-close-pop.js
- mute | platy music
- reiniciar el juego (mismo juego de sudoku), restablece
  el tablero, los errores y el contador 
*/

const reloadGame = () => {
  /*  
  funcion encargada de reiniciar el juego
  - reiniciar contador
  - limpiar inputs
  - reiniciar # de errores
  */

  // limpiar inputs pasando nuevamente la matriz con huecos
  putNumbers(matriz);

  // reiniciamos el tiempo
  reloadTime();

  //restablecemos los errores
  restartErrors();

  // restableciento las ayudas
  restartSudokuHelps();
}


let btnReloadGame =  document.getElementById('btn-reload-game'),
    btnSound =  document.getElementById('btn-volume');

btnReloadGame.addEventListener('click', () => {
  reloadGame();
  replaySound(clickBtnSound); // sonido de click en btn
});


/* 
btnSound.addEventListener('click', () => {

}); */