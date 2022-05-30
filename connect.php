<?php
// try {   // connection for the online platform
//         $db = new PDO('mysql:host=localhost;dbname=anastasiiaa_memory-game;charset=utf8', 'anastasiiaa', 'lkXSqpFWqAPE3Q==');
//     } catch(Exception $e){
//         echo 'Erreur : ' . $e->getMessage();
//     }


try {    // connection for the wamp localhost
        $db = new PDO('mysql:host=localhost;dbname=flip-card-game;charset=utf8', 'root');
    } catch(Exception $e){
        echo 'Erreur : ' . $e->getMessage();
    }