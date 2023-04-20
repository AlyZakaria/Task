<?php

namespace Src\Http;

class Request{
    
    public function method(){
        return strtolower($_SERVER['REQUEST_METHOD']);    
    }
    public function path(){
        return explode("?",$_SERVER['REQUEST_URI'])[0];
    }
}