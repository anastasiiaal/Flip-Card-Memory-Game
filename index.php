<?php 

require_once 'connect.php';

$scoreQuery = $db->query("SELECT `score` FROM `best-time` ORDER BY `score` ASC LIMIT 5");
$score = $scoreQuery->fetchAll(PDO::FETCH_ASSOC);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;700&family=Source+Code+Pro:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/main.css">
    <title>Flip Card Memory Game</title>
</head>
<body>
    <header>
        <div class="container dflex space-between">
            <button id="restart-btn" class="dflex">
                Restart <img src="img/restart.svg" alt="Restart">
            </button>
            <div class="pairs-left dflex">
                <h1 id="pairs-left">
                    0
                </h1>
                <h2>
                    / 18
                </h2>
            </div>
        </div>
    </header>
    <main>
        <div class="container" id="the-container">
            <div class="timer dflex" id="timer-wrapper">
                <div id="progress">
                    <div id="progress-bar"></div>
                </div>
                <p class="number" id="timer-text">04:00</p>
            </div>
        </div>
        <div class="container dflex">
            <div id="overlay" class="hidden"></div>
            <div id="modal" class="hidden">
                <div class="modal__text-wrapper dflex">
                    <!-- <h3 id="start-game">Start a new game</h3> -->
                    <h3 id="new-score">Your new time is: </h3>
                    <h3>Your best time so far:</h3>
                    <ol>
<?php 
foreach($score as $s) {
?>
                        <li><?=$s['score']?></li>
<?php 
};
?>
                    </ol>
                    <button id="new-btn">Got it!</button>
                </div>
            </div>
            <div id="overlay-start"></div>
            <div id="modal-start">
                <div class="modal__text-wrapper dflex">
                    <h3 id="modal-start__text">Are you ready?</h3>
                    <button id="start-btn">Start a game</button>
                </div>
            </div>
        </div>
    </main>

    <script src="script/script.js"></script>
</body>
</html>