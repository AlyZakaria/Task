<?php

// namespace App\Models\Products\ProductTypes;

// use App\Models\Products\Products;
// use Src\Database\MySQLManager;
// use \mysqli;

class DVD extends Products{

    private $size;

    public function create(): bool{
        $conn = MySQLManager::connect();
        try{
            $conn->autocommit(FALSE);
            // echo $this->sku . " " . $this->name . " " . $this->price . " " . $this->size . " " . $this->type;
            echo gettype($this->price);
            $conn->query("insert into products values ('{$this->sku}' , '{$this->name}', {$this->price}, '{$this->size}','{$this->type}');");
            if (!$conn->commit()) 
                return false;
            return true;
        }catch(Exception $e){
            echo $e;
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