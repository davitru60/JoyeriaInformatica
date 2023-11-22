<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Componentes;
use Illuminate\Http\Request;

class ComponentesController extends Controller
{
    public function index()
    {
        $componente = Componentes::all();
        return response()->json(['componente' => $componente]);
    }

    public function store(Request $request)
    {

        $componente = new Componentes();
        $componente->nombre = $request->input('nombre');
        $componente->save();

        return response()->json(['componente' => $componente, 'message' => 'componente creado exitosamente']);

    }

    public function buscar($id_usuario)
    {
        $componente = Componentes::find($id_usuario);

        if (!$componente) {
            return response()->json(['message' => 'Componentes no encontrado'], 404);
        }

        return response()->json(['componente' => $componente]);
    }

    public function destroy($id_usuario)
    {
        $componente = Componentes::find($id_usuario);
        $componente->delete();
    
        return response()->json(['message' => 'Componentes eliminado exitosamente']);
    }
}
