<?php
namespace App\Models;

use Src\Database\MySQLManager;
use \mysqli;

abstract class Products{
    protected $sku;
    protected $name;
    protected $price;
    protected $dimension;
    protected $type;

    public static function all(){
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        $conn = MySQLManager::connect();
        try{
            $sql = "select * from products";
            $result =  $conn->query($sql);   
            $products = []; 
            foreach($result as $row){
                $products[] = $row;
            }
            echo json_encode($products);
        }catch(Exception $e){
            
        }finally{
            // MySQLManager::disconnect();
        }   
    }
}