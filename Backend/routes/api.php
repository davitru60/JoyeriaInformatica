<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ClasificadorController;
use App\Http\Controllers\ComponentesController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\JoyaController;
use App\Http\Controllers\RecetaController;
use App\Http\Controllers\Api\LoteController;
use App\Http\Controllers\FabricadorController;
use App\Http\Controllers\IngredienteController;
use Illuminate\Support\Facades\Route;



//Usuarios
Route::post('login', [AuthController::class, 'login']);
Route::post('registrar', [AuthController::class, 'registrar']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('perfil', [AuthController::class, 'perfilUsuario']);
    Route::get('roles', [AuthController::class, 'obtenerRoles']);
});


//Colaborador
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('lotes', [LoteController::class, 'mostrarLotes']);
    Route::post('lotes', [LoteController::class, 'agregarLote']);
    Route::delete('lotes/{id}', [LoteController::class, 'eliminarLote']);
});


//Clasificador
Route::middleware(['auth:sanctum', 'verificarClasificador'])->group(function () {
    Route::get('lotesNoClasificados', [LoteController::class, 'mostrarLotesNoClasificados']);
});

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('despiece/{id}', [ClasificadorController::class, 'despiezarLote']);
    Route::put('despiece/{id}', [ClasificadorController::class, 'modificarEstadoLote']);
});

//Administrador y clasificador
Route::middleware(['auth:sanctum', 'verificarAdministrador', 'verificarClasificador'])->group(function () {
    Route::get('/componente', [ComponentesController::class, 'index']);
    Route::post('/componente', [ComponentesController::class, 'store']);
    Route::put('/componente/{id}', [ComponentesController::class, 'actualizar']);
    Route::get('/componente/{id}', [ComponentesController::class, 'buscar']);
    Route::delete('/componente/{id}', [ComponentesController::class, 'destroy']);
});

//Administrador
Route::middleware(['auth:sanctum', 'verificarAdministrador'])->group(function () {
    Route::get('/usuarios', [UsuarioController::class, 'index']);
    Route::post('/usuarios', [UsuarioController::class, 'store']);
    Route::put('/usuarios/{id}', [UsuarioController::class, 'actualizar']);
    Route::get('/usuarios/{id}', [UsuarioController::class, 'buscar']);
    Route::delete('/usuarios/{id}', [UsuarioController::class, 'destroy']);
});

//Diseñador
Route::middleware(['auth:sanctum', 'verificarDisenador'])->group(function () {
    Route::get('/joya', [JoyaController::class, 'index']);
    Route::post('/joya', [JoyaController::class, 'store']);
    Route::put('/joya/{id}', [JoyaController::class, 'actualizar']);
    Route::get('/joya/{id}', [JoyaController::class, 'buscar']);
    Route::delete('/joya/{id}', [JoyaController::class, 'destroy']);


    Route::get('/recetas', [RecetaController::class, 'index']);
    Route::post('/recetas', [RecetaController::class, 'store']);
    Route::put('/recetas/{id}', [RecetaController::class, 'actualizar']);
    Route::get('/recetas/{id}', [RecetaController::class, 'buscar']);
    Route::delete('/recetas/{id}', [RecetaController::class, 'destroy']);


    Route::get('ingredientes', [IngredienteController::class, 'mostrarIngredientes']);
    Route::get('ingredientes/{id}', [IngredienteController::class, 'mostrarIngrendienteJoya']);

    Route::post('verificarComponentes', [FabricadorController::class, 'verificarComponentes']);
    Route::post('calcular', [FabricadorController::class, 'calcularCantidadJoyas']);
    Route::post('fabricar',[FabricadorController::class,'fabricarJoyas']);
});






