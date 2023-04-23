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
    $x = 0;
    foreach($array_paths as $path)
    {  
        // if($x == 0)
            // echo $_SERVER['DOCUMENT_ROOT'];
        $file = sprintf( $_SERVER['DOCUMENT_ROOT'] . '/../%s/%s.php', $path, $class_name);
        // echo $file . "<br>";
        if(is_file($file)) 
        {
            require_once $file;

        } 

    }
}

spl_autoload_register('autoload');