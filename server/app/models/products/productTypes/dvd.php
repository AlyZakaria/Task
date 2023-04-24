<?php

class DVD extends Products{

    private $size;

    public function create(): bool{
        $conn = MySQLManager::connect();
        try{
            $sql = "insert into products values ('{$this->sku}' , '{$this->name}', {$this->price},'{$this->size}', '{$this->type}')";
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
        $this->size = $product['size'];
        return true;
    }


}