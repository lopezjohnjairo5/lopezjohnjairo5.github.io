let errorColor = 'rgb(200,0,0)',
    correctColor = 'rgb(255,255,255)',
    letterColor = 'rgb(0,0,0)',
    enabledColor = 'rgb(255,255,255)',
    disableColor = "rgb(230,230,230)",
    selectColor = 'rgba(130,130,255,.8)',
    disabledBtnColor = 'rgb(200,200,200)', // btn how to play
    enabledBtnColor = 'rgb(130,130,255)'; // btn how to play

    // interface elements
    backgroundContentGame = document.getElementById('content-game');
    btnsBackground = document.querySelectorAll('button');
    titleGame = document.getElementById('title-game');
    backgroundBodyGame = document.getElementById('game-body');

/* 
    --white: white;
    --gray: rgb(30,30,30);
    --gray2:rgb(200,200,200);
    --black: black;
    --yellow: yellow;
    --orange: orange; 
*/

const changeColorsMode = (modeGame) => {
    /* 
    changeColorsMode
    funcion encargada de cambiar los colores segun
    el modo seleccionado.
    1- light mode
    2- dark mode
    */
    switch (modeGame) {
        case 1:
            errorColor = 'rgb(200,0,0)';
            correctColor = 'rgb(255,255,255)';
            letterColor = 'rgb(0,0,0)';
            enabledColor = 'rgb(255,255,255)';
            disableColor = "rgb(230,230,230)";
            selectColor = 'rgba(130,130,255,.7)';
            disabledBtnColor = 'rgb(200,200,200)';
            enabledBtnColor = 'rgb(130,130,255)';
            backgroundContentGame.style.backgroundColor="rgb(255,255,255)";
            backgroundBodyGame.style.backgroundColor="rgb(255,255,255)";
            changeColorBtnsInterface(disableColor,'black');
            changeColorTxtInterface();
            break;
        case 2:
            errorColor = 'rgb(200,20,20)';
            correctColor = 'rgb(0,0,0)';
            letterColor= 'rgb(255,255,255)';
            enabledColor = 'rgb(0,0,0)';
            disableColor = "rgb(50,50,50)";
            selectColor = 'rgba(130,130,255,.7)';
            disabledBtnColor = 'rgb(200,200,200)';
            enabledBtnColor = 'rgb(130,130,255)';
            backgroundContentGame.style.backgroundColor="rgb(0,0,0)";
            backgroundBodyGame.style.backgroundColor="rgb(0,0,0)";
            titleGame.style.color = 'rgb(255,255,255)';

            changeColorBtnsInterface('orange','white');
            changeColorTxtInterface();
            break;    
    
    }
};


const changeColorBtnsInterface = (bgColorBtn, fontColorBtn) => {
    btnsBackground.forEach(el => {
        el.style.backgroundColor = bgColorBtn;
        el.style.color = fontColorBtn;
        el.style.border = "none";
        el.style.borderRadius = "5px";
    });
};

const changeColorTxtInterface = () => {
    displayTime.style.color = letterColor;
    displayErrors.style.color= letterColor;
    displayDificult.style.color= letterColor;
};


window.addEventListener('load',() => {
    changeColorsMode(1)
});