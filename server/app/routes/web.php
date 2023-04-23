<?php

// namespace App\Routes;

// require __DIR__ . '/../../src/http/route.php';
// require __DIR__ . '/../controllers/productsController.php';

// use Src\Http\Route;
// use App\Controllers\ProductsController;


Route::get('/' , function() {
    echo 'Home' . "\n";
});
Route::get('/home' ,function() {
    echo 'Home' . "\n";
});
Route::get('/about' , function() {
    echo 'about';
});

Route::get('/products', [ProductsController::class, 'all']);
Route::post('/products' , [ProductsController::class, 'deleteAll']);
Route::post('/new-product' , [ProductsController::class, 'create']);