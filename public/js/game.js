let canvas = document.getElementById('board-game'),
    playBoard = document.getElementById('play'),
    ctx = canvas.getContext("2d"),
    widthC = 100, // desde aqui van tamaños y coordenadas de los vasos o cups
    heightC = 120,
    velocity = 1000,// velocidad de desplazamiento de los vasos y la bola 1seg
    displacement = 5,//unidades que se desplazará el vaso en cada fotograma
    maxLeftPosition = 30, // se usaran como referentes a la hora de mover los objetos. 
    centerPosition = (canvas.width / 2) - (widthC / 2),
    maxRightPosition = canvas.width - (widthC + maxLeftPosition),
    maxTopPosition = (canvas.height / 2) - (heightC / 2) - 50, // posicion del vaso antes de cubrir la esfera
    minTopPosition = (canvas.height / 2) - (heightC / 2), 
    posx1 = maxLeftPosition, // posiciones iniciales de cada vaso
    posx2 = centerPosition,
    posx3 = maxRightPosition,
    posy1 = minTopPosition,
    posy2 = minTopPosition,
    posy3 = minTopPosition,
    widthE = 40,// desde aqui van tamaños y coordenadas de la esfera
    heightE = 35,
    posxE = (canvas.width / 2) - (widthE / 2), 
    posyE = (canvas.height / 2) + (heightE / 2);

const board = () => {
    // funcion encargada de inicializar el tablero de juego
    canvas.style.backgroundColor = btnChangeMode.value == "#FFB633" ? "#FFB633" : "rgb(16,16,94)";
    canvas.style.borderRadius = "10px";
};

const drawPlasticCup = (x, y, width, height) => {
    //ctx.fillStyle = color;
    //ctx.fillRect(x, y, width, height);
    let cupImg = new Image();
    cupImg.src = './public/img/game/plastic_cup.png';
    cupImg.onload = function(){
        ctx.drawImage(cupImg, x, y, width, height);
    }
};

const drawBall = (x, y, width, height) => {
    /*ctx.fillStyle = color;
    ctx.arc(x, y, width, height, Math.PI * 2, true);
    ctx.fill();*/
    let ballImg = new Image();
    ballImg.src = './public/img/game/ball.png';
    ballImg.onload = function(){
        ctx.drawImage(ballImg, x, y, width, height);
    }
};

const draw = () => {
    /*
    funcion encargada de llamar a las funciones que dibujan los vasos y la esfera
    */
    console.log(`posx1= ${posx1} ; posx2= ${posx2} ; posx3= ${posx3}`);
    drawPlasticCup(posx1, posy1, widthC, heightC);
    drawPlasticCup(posx2, maxTopPosition, widthC, heightC);
    drawPlasticCup(posx3, posy3, widthC, heightC);
    drawBall(posxE, posyE, widthE, heightE);
};

const main = () => {
    /*
    funcion principal encargada de llamar todo el contenido
    */
    board(); // inicializando el tablero o lienzo de juego
    draw(); // pintando los vasos y la esfera
    // limpiando la pantalla antes de mover
    // moviendo los vasos y la esfera
}

// llamando a la funcion principal
main();