<?php

// namespace App\Models\Products\ProductTypes;

// use App\Models\Products\Products;
// use Src\Database\MySQLManager;
// use \mysqli;

require_once __DIR__ . '/../products.php';

class Book extends Products{
    private $weight;

    public function create(): bool{
        $conn = MySQLManager::connect();
        try{
            $conn->autocommit(FALSE);
            $conn->query("INSERT INTO products values ('{$this->sku}' , '{$this->name}', {$this->price},' {$this->weight}', '{$this->type}')");
            if (!$conn->commit()) 
                return false;
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