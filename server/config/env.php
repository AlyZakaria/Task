<?php

namespace Config;
require_once __DIR__ . '/dotEnv.php';

class Env{  

    private static $env;

    private final function __construct(){
        dotEnv();
        foreach($_ENV AS $key => $val)
            define($key, $val);
    }

    public static function establish(): self {
        if(!isset(self::$env))
            self::$env = new Env();
        
        return self::$env;
    }

    public static function getAll(){
        return $_ENV;
    }    
    
    public static function get(string $key): string | null {
        return $_ENV[$key] ?? null;
    }
}
