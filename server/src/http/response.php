<?php

namespace Src\Http;

class Response{
    protected $statusCode;
    protected $data;

    public function __construct($statusCode = null, $data = "Error"){
        $this->statusCode = $statusCode;
        $this->data = $data;
    }

    public function sendResponse(){
        echo json_encode($this->data);
        http_response_code($this->statusCode);
    }

}