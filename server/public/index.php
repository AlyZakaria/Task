<?php

require_once __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../App/routes/web.php';
use Src\Application;

$app = new Application();
$app->run();


// echo "<br>". DB_PASSWORD . "<br>";