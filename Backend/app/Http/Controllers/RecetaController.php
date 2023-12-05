<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Receta;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;

class RecetaController extends Controller
{
    public function index()
    {
        $receta = Receta::all();
        return response()->json(['receta' => $receta]);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_joya' => 'required|integer',
            'descripcion' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], Response::HTTP_UNPROCESSABLE_ENTITY);
        } else {
            $receta = Receta::create([
                'id_joya' => $request['id_joya'],
                'descripcion' => $request['descripcion']
            ]);

            return response()->json([
                'receta' => $receta,
            ], Response::HTTP_CREATED);
        }
    }

    public function buscar($id_receta)
    {
        $receta = Receta::find($id_receta);

        if (!$receta) {
            return response()->json(['message' => 'Receta no encontrado'], 404);
        }

        return response()->json(['receta' => $receta]);
    }

    public function destroy($id_receta)
    {
        $receta = Receta::find($id_receta);
        $receta->delete();

        return response()->json(['message' => 'Receta eliminado exitosamente']);
    }

    public function actualizar(Request $request,$id_receta)
    {
        // Buscar el receta por ID
        $receta = Receta::find($id_receta);

        // Verificar si el receta existe
        if (!$receta) {
            return response()->json(['message' => 'Receta no encontrado'], 404);
        }

        // Actualizar los datos del receta
        $receta->update([
            'id_joya' => $request['id_joya'],
            'descripcion' => $request['descripcion'],
        ]);


        // Respuesta JSON con el receta actualizado
        return response()->json(['receta' => $receta, 'message' => 'Receta actualizado exitosamente']);
    }

}
