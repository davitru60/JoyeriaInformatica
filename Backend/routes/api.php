<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Support\Facades\Route;

Route::post('registrar',[AuthController::class,'registrar']);
Route::get('/usuarios', [UsuarioController::class, 'index']); //Saca todos los usuarios
Route::post('/usuarios', [UsuarioController::class, 'store']); //Saca 1 usuario
Route::get('/usuarios/{id}', [UsuarioController::class, 'buscar']); //Busca 1 usuario por id
Route::delete('/usuarios/{id}', [UsuarioController::class, 'destroy']); //Elimina 1 usuario por id
