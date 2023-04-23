<?php
// require '../vendor/autoload.php';

use Dotenv\Dotenv;

function dotEnv(){
    $dotenv = Dotenv::createImmutable(__DIR__ ."/..");
    $dotenv->load();
}
