<?php

namespace App\Controllers;

use App\Models\Products\ProductTypes\{Book, DVD, Furniture};
use App\Models\Products\Products;
use Src\Http\{Response,Request};
use Src\Exceptions\NotFoundException;

class ProductsController{


    public function all(){
        try{
            
            $Products = Products::all();
            if(sizeof($Products)){
                $response = new Response(200,$Products);
                $response->sendResponse();
            }
            else throw new NotFoundException("No Products Found");
         
        }catch(NotFoundException $e){
            $response = new Response(404,$e->Message());
            $response->sendResponse();
        }catch(Exception $e){
            $response = new Response(502,"Error");
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
            $response->sendResponse();
        }catch(Exception $e){
            $response = new Response(502,"Error");
            $response->sendResponse();
        }
    }

}