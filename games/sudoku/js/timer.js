let displayTime = document.getElementById('display-time'); 
let seconds = 0,
    minutes = 0,
    hours = 0;
let clock = '';
let timeC;

const timeCount = () => {
  /* 
  funcion encargada de mostrar el tiempo de juego transcurrido
  */
  replaySound(clockSound); //restablece el sonido al inicio y lo reproduce  
  timeC = setInterval(() => {
    if (seconds >= 59) {
      seconds = 0;
      if (minutes >= 59) {
        minutes = 0;
        if (hours >= 98) {
          seconds = 0;
          minutes = 0;
          hours = 0;
          location.reload(); // si nos pasamos de las 99 horas recargamos la página
          /* 
          AQUI EN LUGAR DE REINICIAR PODRIAMOS MOSTRAR
          EL POP DE PERDER EL JUEGO POR EXESO DE TIEMPO
          */
        } else {
          hours++;
        }
      } else {
        minutes++;
      }
    } else {
      seconds++;
    }
  
    // damos formato de h:m:s al display  
    clock = (hours > 9 ? hours.toString() : '0' + hours.toString()) + ':';
    clock += (minutes > 9 ? minutes.toString() : '0' + minutes.toString()) + ':';
    clock += (seconds > 9 ? seconds.toString() : '0' + seconds.toString());
    displayTime.innerHTML = clock;
  }, 1000);
}

const reloadTime = () =>{
    seconds = 0;
    minutes = 0;
    hours = 0;
}

const clearTimer = () => {
    pauseSound(clockSound); //pausa el sonido  
    clearInterval(timeC);
};