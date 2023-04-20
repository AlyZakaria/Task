<?php

namespace Src\Http;

class Response{
    
    public function method(){
        return strtolower($_SERVER['REQUEST_METHOD']);    
    }
    public function path(){
        return explode("?",$path)[0];
    }
}