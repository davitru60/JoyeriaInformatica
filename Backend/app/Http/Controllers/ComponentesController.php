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
        $componente->hw = $request->input('hw');
        $componente->save();

        return response()->json(['componente' => $componente, 'message' => 'componente creado exitosamente']);

    }

    public function actualizar(Request $request, $id_comp)
    {
        // Buscar el $componente por ID
        $componente = Componentes::find($id_comp);

        // Verificar si el comp$componente existe
        if (!$componente) {
            return response()->json(['message' => 'Componente no encontrado'], 404);
        }

        // Validar los datos de la solicitud
        $request->validate([
            'nombre' => 'required|string|max:255',
            'hw' => 'required|boolean',
        ]);

        // Actualizar los datos del comp$componente
        $componente->update([
            'nombre' => $request['nombre'],
            'hw' => $request['hw'],
        ]);

        // Respuesta JSON con el $componente actualizado
        return response()->json(['$componente' => $componente, 'message' => 'Componente actualizado exitosamente']);
    }

    public function buscar($id_comp)
    {
        $componente = Componentes::find($id_comp);

        if (!$componente) {
            return response()->json(['message' => 'Componentes no encontrado'], 404);
        }

        return response()->json(['componente' => $componente]);
    }

        
    public function destroy($id_comp)
    {
        $componente = Componentes::find($id_comp);
        $componente->delete();
    
        return response()->json(['message' => 'Componentes eliminado exitosamente']);
    }

    
}
