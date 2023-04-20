<?php

namespace App\Controllers;

use App\Models\Products;

class ProductsController{

    public function all(){
        Products::all();
    }

}