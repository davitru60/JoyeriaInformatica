<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ComponentesController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\Api\LoteController;
use Illuminate\Support\Facades\Route;



Route::get('/usuarios', [UsuarioController::class, 'index']); //Saca todos los usuarios
Route::post('/usuarios', [UsuarioController::class, 'store']); //Guarda 1 usuario
Route::get('/usuarios/{id}', [UsuarioController::class, 'buscar']); //Busca 1 usuario por id
Route::delete('/usuarios/{id}', [UsuarioController::class, 'destroy']); //Elimina 1 usuario por id


Route::post('login',[AuthController::class,'login']);
Route::post('registrar',[AuthController::class, 'registrar']);

Route::post('lote',[LoteController::class]);

Route::get('/componente', [ComponentesController::class, 'index']); 
Route::post('/componente', [ComponentesController::class, 'store']); 
Route::get('/componente/{id}', [ComponentesController::class, 'buscar']); 
Route::delete('/componente/{id}', [ComponentesController::class, 'destroy']); 