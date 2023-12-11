<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Joya;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;

class JoyaController extends Controller
{
    public function index()
    {
        $joya = Joya::all();
        return response()->json(['joya' => $joya]);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:255',
            'foto' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], Response::HTTP_UNPROCESSABLE_ENTITY);
        } else {
            $joya = Joya::create([
                'nombre' => $request['nombre'],
                'foto' => $request['foto']
            ]);

            return response()->json([
                'joya' => $joya,
            ], Response::HTTP_CREATED);
        }
    }

    public function buscar($id_joya)
    {
        $joya = Joya::find($id_joya);

        if (!$joya) {
            return response()->json(['message' => 'Joya no encontrado'], 404);
        }

        return response()->json(['joya' => $joya]);
    }

    public function destroy($id_joya)
    {
        $joya = Joya::find($id_joya);
        $joya->delete();

        return response()->json(['message' => 'Joya eliminado exitosamente']);
    }

    public function actualizar(Request $request,$id_joya)
    {
        // Buscar el joya por ID
        $joya = Joya::find($id_joya);

        // Verificar si el joya existe
        if (!$joya) {
            return response()->json(['message' => 'Joya no encontrado'], 404);
        }

        // Actualizar los datos del joya
        $joya->update([
            'nombre' => $request['nombre'],
            'foto' => $request['foto'],
        ]);


        // Respuesta JSON con el joya actualizado
        return response()->json(['joya' => $joya, 'message' => 'Joya actualizado exitosamente']);
    }

}
