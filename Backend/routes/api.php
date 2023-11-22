<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('registrar',[AuthController::class,'registrar']);

Route::get('/componente', [ComponentesController::class, 'index']); 
Route::post('/componente', [ComponentesController::class, 'store']); 
Route::get('/componente/{id}', [ComponentesController::class, 'buscar']); 
Route::delete('/componente/{id}', [ComponentesController::class, 'destroy']); 