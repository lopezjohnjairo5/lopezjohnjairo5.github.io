<div id="how-gaming">
    <a id="close-how-gaming" href="#">X</a>
    <h2>Como Jugar</h2>
    <br>
    <div id="how-gaming-page0" class="how-gaming-pages" >
        <h4>General</h4>
        <p>
            Sudoku clásico es un juego matemático que se compone
            de una cuadrícula de 9x9 casillas (81 casillas en total).
            El juego consiste en llenar la cuadricula con los números
            del 1 al 9 evitando que se repitan números en una misma fila, 
            columna o en las casillas que conforman una región | cuadricula 
            de 3x3. <i>Ejemplos en siguientes páginas</i>
        </p>       
        
        <h4>Ganar | perder</h4>
        <p>
            Para ganar una partida el jugador deberá completar las 81 casillas
            sin errores (entiendase por errores: repetir números por filas, columnas, regiones 3x3).
            Si el jugador cuenta con 3 errores perderá la partida. 
        </p>

        <h4>Dificultad y ayudas</h4>
        <p>
            Al iniciar una partida nueva, el jugador podrá seleccionar entre 4 niveles
            de dificultad, muy fácil, fácil, medio y dificil. Dependiendo la dificultad
            seleccionada el usuario contará una cantidad diferente de espacios en blanco
            a llenar. 
        </p>
        <p>
            En la parte inferior derecha, el jugador podrá encontrar 3 btns denominados:
            <br>
            <br>
            <ul>
                <li>
                    Rellenar: permite poner en la casilla seleccionada el número correcto.
                </li>
                <li>
                    Borrar casilla: borrará el contenido de la casilla seleccionada.
                </li>
                <li>
                    Como jugar: Permite acceder a este menú emergente.
                </li>
            </ul>
            <br>
            Para el caso del btn "Rellenar", el usuario podrá utilizarlo un máximo de 3 veces durante cada partida.
            Además, el jugador deberá tener presente que si se utiliza esta ayuda en una casilla que ya cuenta
            con un número correcto, el sistema solamente volverá a poner el mismo número en dicha casilla por lo cual
            contará como una ayuda utilizada.
        </p>
    </div>
    <div id="how-gaming-page1" class="how-gaming-pages hidden" >
        <h4>Filas</h4>
        <p>
            Poner los números del 1 al 9 en cada fila, 
            evitando que se repitan, ej:
        </p>          
        <br>
        <div class="how-game-imgs">
            <picture>
                <img src="./imgs/row-error.png" alt="img ilustrativa fila incorrecta">
                <small><b style="color:red;">Error</b> número repetido en la fila</small>
            </picture>
            <picture>
                <img src="./imgs/row-ok.png" alt="img ilustrativa fila correcta">
                <small><b style="color:green;">Correcto</b> números del 1 al 9 sin repetir en la fila</small>
            </picture>
        </div>  
    </div>
    <div id="how-gaming-page2" class="how-gaming-pages hidden">
        <h4>Columnas</h4>
        <p>
            Poner los números del 1 al 9 en cada columna, 
            evitando que se repitan,ej:
        </p>            
        <br>
        <div class="how-game-imgs">
            <picture>
                <small><b style="color:red;">Error</b> número repetido en la columna</small>
                <img src="./imgs/column-error.png" alt="img ilustrativa columna incorrecta">
            </picture>
            <picture>
                <small><b style="color:green;">Correcto</b> números del 1 al 9 sin repetir en la columna</small>
                <img src="./imgs/column-ok.png" alt="img ilustrativa columna correcta">
            </picture>
        </div>    
    </div>
    <div id="how-gaming-page3" class="how-gaming-pages hidden">
        <h4>Cuadriculas 3X3</h4>
        <p>
            En cada grupo 3X3 (3 columnas y 3 filas, total 9 celdas),
            deben estar presentes los números del 1 al 9, evitando la
            repetición de algun número,ej: 
        </p>            
        <br>
        <div class="how-game-imgs">
            <picture>
                <img src="./imgs/3x3-error.png" alt="img ilustrativa grupo incorrecta">
                <small><b style="color:red;">Error</b> número repetido en la región o grupo</small>
            </picture>
            <picture>
                <img src="./imgs/3x3-ok.png" alt="img ilustrativa grupo correcta">
                <small><b style="color:green;">Correcto</b> números del 1 al 9 sin repetir en la región o grupo</small>
            </picture>
        </div> 
    </div>
    <div id="selector-pages-how-to">
        <button class="btn-selector-pages" id="btn-how-gaming-page0"></button>
        <button class="btn-selector-pages" id="btn-how-gaming-page1"></button>
        <button class="btn-selector-pages" id="btn-how-gaming-page2"></button>
        <button class="btn-selector-pages" id="btn-how-gaming-page3"></button>

    </div>
</div>
