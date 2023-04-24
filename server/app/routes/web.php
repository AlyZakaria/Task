<?php


Route::get('/' , function() {
    echo 'Home' . "\n";
});
Route::get('/home' ,function() {
    echo 'Home' . "\n";
});


Route::get('/products', [ProductsController::class, 'all']);
Route::post('/products' , [ProductsController::class, 'deleteAll']);
Route::post('/new-product' , [ProductsController::class, 'create']);