<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ComponentesController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\Api\LoteController;
use Illuminate\Support\Facades\Route;


//Usuarios
Route::post('login',[AuthController::class,'login']);
Route::post('registrar',[AuthController::class, 'registrar']);


Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('perfil',[AuthController::class, 'perfilUsuario']);
    Route::get('roles',[AuthController::class, 'obtenerRoles']);
});


//Administrador
Route::get('/usuarios', [UsuarioController::class, 'index']); //Saca todos los usuarios
Route::post('/usuarios', [UsuarioController::class, 'store']); //Guarda 1 usuario
Route::get('/usuarios/{id}', [UsuarioController::class, 'buscar']); //Busca 1 usuario por id
Route::delete('/usuarios/{id}', [UsuarioController::class, 'destroy']); //Elimina 1 usuario por id

Route::get('/componente', [ComponentesController::class, 'index']); 
Route::post('/componente', [ComponentesController::class, 'store']); 
Route::get('/componente/{id}', [ComponentesController::class, 'buscar']); 
Route::delete('/componente/{id}', [ComponentesController::class, 'destroy']); 

//Lotes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('lotes',[LoteController::class,'mostrarLotes']);
    Route::post('lotes',[LoteController::class,'agregarLote']);
    Route::delete('lotes/{id}',[LoteController::class,'eliminarLote']);
});
