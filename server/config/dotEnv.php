<?php

function dotEnv(){
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ ."/..");
    $dotenv->load();
}
