<?php


function autoload($class_name) 
{

    # List all the class directories in the array.
    $array_paths = array(
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

    );
    foreach($array_paths as $path)
    {
        $file = sprintf( __DIR__ . '/%s/%s.php', $path, $class_name);
        if(is_file($file)) 
        {
            require_once $file;
            // echo  $file . " ";

        } 

    }
}

spl_autoload_register('autoload');