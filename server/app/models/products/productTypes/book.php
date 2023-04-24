<?php

require_once  $_SERVER['DOCUMENT_ROOT'] . '/../app/models/products/Products.php';

class Book extends Products{
    private $weight;

    public function create(): bool{
        $conn = MySQLManager::connect();
        try{
            $sql = "insert into products values ('{$this->sku}' , '{$this->name}', {$this->price},'{$this->weight}', '{$this->type}')";
            $result = $conn->query($sql);
                if(!$result) return false;
            return true;
        }catch(Exception $e){
            return false;
        }finally{
            MySQLManager::disconnect();
        }
    }

    public function setValues($product){
        parent::setValues($product);
        $this->weight = $product['weight'];
    }

}