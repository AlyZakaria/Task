<?php
namespace App\Models\Products;

use Src\Database\MySQLManager;
use \mysqli;

abstract class Products{
    protected $sku;
    protected $name;
    protected $price;
    protected $attributes;
    public static $type;


    public static function all(){
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        $conn = MySQLManager::connect();
        try{
            $sql = "select * from products";
            $result =  $conn->query($sql);   
            $products = []; 
            foreach($result as $row)
                $products[] = $row;
            
            return $products;
        }catch(Exception $e){
            return $e;
        }finally{
            MySQLManager::disconnect();
        }  
    }

    public static function deleteAll($products): bool{
        $conn = MySQLManager::connect();
        try{
            $conn->autocommit(FALSE);
            foreach($products as $product){
                $conn->query("delete from products where sku = {$product->sku}");
            }
            if (!$conn->commit()) 
                return false;
        
        return true;
        }catch(Exception $e){
            return false;
        }finally{
            MySQLManager::disconnect();
        }
    }
}