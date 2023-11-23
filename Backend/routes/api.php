<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\LoteController;
use Illuminate\Support\Facades\Route;


Route::post('login',[AuthController::class,'login']);
Route::post('registrar',[AuthController::class, 'registrar']);

Route::post('lote',[LoteController::class]);