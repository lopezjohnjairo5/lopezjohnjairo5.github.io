import {cardStartContent, startLogo, profileDescription} from './exports.js'

function switch_start_card_content (){
  startLogo.classList.toggle('hidden');
  profileDescription.classList.toggle('hidden');
}

function increment_decrement_values(type, sizeX, sizeY, displacement){
  if (type === "d") {
    sizeX -= displacement;
    sizeY -= displacement;
    cardStartContent.style.width = sizeX+'px';
    cardStartContent.style.height = sizeY+'px';
  } else {
    sizeX += displacement;
    sizeY += displacement;
    cardStartContent.style.width = sizeX+'px';
    cardStartContent.style.height = sizeY+'px';
  }

  return [sizeX, sizeY];
}


cardStartContent.addEventListener('click', () => {
  let originalSize = cardStartContent.clientWidth;
  let newSizeX = cardStartContent.clientWidth;
  let newSizeY = cardStartContent.clientHeight;
  let screenWidth = screen.width;
  let windowWidth = window.innerWidth;
  let displacement;
  let duration;

  // asignamos la velocidad de reproduccion, segun el tamaño de la pantalla y por supuesto del div
  if (screenWidth > 700 && windowWidth > 700) {
    displacement = 7;
	duration = 1;
  } else {
    displacement = 3;
	duration = 3;
  }
	
  //min the div
  let minCycle = setInterval(() => {
    if (newSizeX > 0) {
	  [newSizeX, newSizeY] = increment_decrement_values("d", newSizeX, newSizeY, displacement);
	} else {
	  // clean the last interval
	  clearInterval(minCycle);
  	  
  	  //change see div
	  switch_start_card_content();

	  //max the div
	  let maxCycle = setInterval(() => {
	    if (newSizeX < originalSize) {
	      [newSizeX, newSizeY] = increment_decrement_values("i", newSizeX, newSizeY, displacement);
	    } else {
	      clearInterval(maxCycle);
	    }
	  },duration);
    }
  },duration);
});
