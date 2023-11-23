<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Lote;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class LoteController extends Controller
{
    public function agregarLote(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ubi' => 'required|string',
            'estado' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response(['errores' => $validator->errors()->all()], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

    }
}
