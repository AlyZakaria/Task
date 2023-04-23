<?php

// require_once __DIR__ . '/../vendor/autoload.php';
include __DIR__ . '/../autoload.php';
require __DIR__ . '/../vendor/autoload.php';

require __DIR__ . '/../app/routes/web.php';
require __DIR__ . '/../src/application.php';

// use Src\Application;
// phpinfo();
$app = new Application();
$app->run();


// echo "<br>". DB_PASSWORD . "<br>";