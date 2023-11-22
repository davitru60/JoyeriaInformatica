<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\LoteController;
use App\Http\Controllers\ColaboradorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Route::post('registrar',[AuthController::class,'registrar']);
//Route::post('login',[AuthController::class,'login']);
Route::post('login',[AuthController::class,'login']);
Route::post('register',[AuthController::class, 'register']);

Route::post('lote',[LoteController::class]);