<?php

use Src\Http\Route;

Route::get('/' , function() {
    echo 'Home' . "\n";
});
Route::get('/home' , function() {
    echo 'Home' . "\n";
});
Route::get('/about' , function() {
    echo 'about';
});
// Route::get('/' , [HomeController::class,'index']);
// Route::post('/', [HomeController::class, 'register']);