<?php

namespace App\Models\Products\ProductTypes;

use App\Models\Products\Products;
use Src\Database\MySQLManager;
use \mysqli;

class Furniture extends Products{
    private $height;
    private $width;
    private $length;
    private $dimension;

    public function create(): bool{
        $conn = MySQLManager::connect();
        try{
            $conn->autocommit(FALSE);
            $conn->query("INSERT INTO products values ('{$this->sku}' , '{$this->name}', {$this->price}, '{$this->dimension}','{$this->type}')");
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
        $this->height = $product['height'];
        $this->width = $product['width'];
        $this->length = $product['length'];
        $this->dimension = $this->height . 'x'. $this->length . 'x' . $this->width;
    }

}