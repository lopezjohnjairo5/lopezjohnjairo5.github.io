<?php
    include "./views/head.php";
?>
<body>
    <?php
        include "./views/banner.php";
    ?>
    <div id="container-game">
        <div id="menu">
        
            <?php 
                include "./views/menu.php";
                include "./views/options.php";
            ?>
        </div>
        <div id="game">
            <?php
                include "./views/game.php";
                include "./views/game-list.php";
            ?>            
        </div>
        <?php
            include "./views/pop-new.php";
            include "./views/pop-pause.php";
            include "./views/pop-config.php";
            include "./views/pop-win.php";
            include "./views/pop-lose.php";
        ?>
    </div>
    <?php 
        include "./views/scripts.php";
        include "./views/banner.php";

    ?>
</body>
<?php 
    include "./views/footer.php";
?>
</html>