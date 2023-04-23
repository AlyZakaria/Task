<?php

// require_once __DIR__ . '/../vendor/autoload.php';
require '../autoload.php';
require  '../vendor/autoload.php';


require   '../app/routes/web.php';
// require __DIR__ . '/../src/application.php';

// use Src\Application;
// // phpinfo();
// echo "<pre>";
//  var_dump($_SERVER);
//  echo "<pre>";

$app = new Application();
$app->run();


// echo "<br>". DB_PASSWORD . "<br>";