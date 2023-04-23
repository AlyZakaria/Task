<?php

// namespace App\Controllers;

// use App\Models\Products\ProductTypes\{Book, DVD, Furniture};
// use App\Models\Products\Products;
// use Src\Http\{Response,Request};
// use Src\Exceptions\NotFoundException;
require_once  $_SERVER['DOCUMENT_ROOT'] . '/../app/models/products/productTypes/Book.php';
require_once  $_SERVER['DOCUMENT_ROOT'] . '/../app/models/products/productTypes/DVD.php';
require_once  $_SERVER['DOCUMENT_ROOT'] . '/../app/models/products/productTypes/Furniture.php';

// use mysqli_sql_exception;

class ProductsController{

    protected $types;
    public function __construct() {
        $this->types = [
            'Book' =>  new Book() , 
            'DVD' => new DVD() ,
            'Furniture' => new Furniture()
        ];
    }

    public function all(){
        try{
            $Products = Products::all();
            if(sizeof($Products))
                $response = new Response(200,$Products);
            else throw new NotFoundException("No Products Found");
        }catch(NotFoundException $e){
            $response = new Response(404,$e->Message());
        }catch(Exception $e){
            $response = new Response(502,"Error");
        }finally{
            $response->sendResponse();
        }
    }
    public function deleteAll(){
        try{
            $response = null;
            $products = Request::body();
            $deleted = Products::deleteAll($products);
            if($deleted)
                $response = new Response(200,"Products deleted successfully");
            else throw new Exception();
        }catch(Exception $e){
            $response = new Response(502,"Error");
        }finally{
            $response->sendResponse();
        }
    }
    public function create(){
        try{    
            $response = new Response();
            $product = Request::body();
            // $className = $product['type'];
            // var_dump($product[0]);
            // $createProduct = $this->types[$product['type']];
            $className = $product['type'];
            $createProduct = new $className();
            $createProduct->setValues($product);
            $created = $createProduct->create();       
            if($created)
                $response = new Response(200,"Products created successfully");
            else  throw new Exception();
        }catch(mysqli_sql_exception $e){
            $response = new Response(409, "product Id already exists!!");
        }
        catch(Exception $e){
            $response = new Response(409, "product Id already exists!!");
        }finally{
            $response->sendResponse();
        }
    }
}

