let canvas = document.getElementById('board-game'),
    playBoard = document.getElementById('play'),
    ctx = canvas.getContext("2d"),
    widthC = 100, // desde aqui van tamaños y coordenadas de los vasos
    heightC = 120,
    posx1 = 30,
    posx2 = (canvas.width / 2) - (widthC / 2),
    posx3 = canvas.width - (widthC + posx1),
    posy1 = (canvas.height / 2) - (heightC / 2),
    posy2 = (canvas.height / 2) - (heightC / 2),
    posy3 = (canvas.height / 2) - (heightC / 2),
    widthE = 40,// desde aqui van tamaños y coordenadas de la esfera
    heightE = 35,
    posxE = (canvas.width / 2) - (widthE / 2), 
    posyE = (canvas.height / 2) + (heightE / 2); 

const board = () => {
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
    /*ctx.fillStyle = "rgb(200,0,0)"; // color de fondo
    ctx.fillRect(10, 10, 55, 50); // dibujo en posicion

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 55, 50);
        widthC = 50,
    heightC = 60,
    posx1 = 10,
    posx2 = canvas.style.width / 2,
    posx3 = canvas.style.width - (widthC + posx1);
    */
    console.log(`posx1= ${posx1} ; posx2= ${posx2} ; posx3= ${posx3}`);
    drawPlasticCup(posx1, posy1, widthC, heightC);
    drawPlasticCup(posx2, posy2, widthC, heightC);
    drawPlasticCup(posx3, posy3, widthC, heightC);
    drawBall(posxE, posyE, widthE, heightE);
};

const main = () => {
    /*
    funcion principal encargada de llamar todo el contenido
    */
    board();
    draw();
}

// llamando a la funcion principal
main();