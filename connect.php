<?php
try {
        $db = new PDO('mysql:host=localhost;dbname=flip-card-game;charset=utf8', 'root');
    } catch(Exception $e){
        echo 'Erreur : ' . $e->getMessage();
    }