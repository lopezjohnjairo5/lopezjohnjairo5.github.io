<?php
    include "./views/head.php";
?>
<body id="game-body">
    <?php
        include "./views/banner.php";
    ?>
    <section id="content-game">
        <h1 id="title-game">Sudoku</h1>
        <?php
            include "./views/game-board.php";

            // pops
            include "./views/dificult-pop.php";
            include "./views/pause-pop.php";
            include "./views/win-pop.php";
            include "./views/lose-pop.php";
            include "./views/how-gaming-pop.php";
            include "./views/reload-game-pop.php";
            include "./views/sounds-pop.php";
        ?>
    </section>
    
    <?php
        include "./views/scripts.php";
        include "./views/banner.php";
        ?>
    
</body>
<?php 
    include "./views/footer.php";
?>
</html>