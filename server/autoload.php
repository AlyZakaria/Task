<?php


function autoload($className) {
    $paths = [
        'app/controllers', 
        'app/models', 
        'app/routes',
        'config',
        'public',
        'public_html',
        'src',
        'src/database',
        'src/exceptions',
        'src/http',

    ];
    foreach($paths as $path){  
        $file = sprintf( $_SERVER['DOCUMENT_ROOT'] . '/../%s/%s.php', $path, $className);
        if(is_file($file)) 
            require_once $file;
    }
}

spl_autoload_register('autoload');