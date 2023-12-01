<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Colaborador;
use App\Models\Lote;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class LoteController extends Controller
{
    public function agregarLote(Request $request){
    
        $validator = Validator::make($request->all(), [
            'ubicacion' => 'required|string',
            'estado' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response(['errores' => $validator->errors()->all()], Response::HTTP_UNPROCESSABLE_ENTITY);
        } else {
            $usuario = Auth::user();

            $colaboradorId = Colaborador::where('id_usuario', $usuario->id)->value('id_colaborador');
            $lote = Lote::create([
                'id_colaborador' => $colaboradorId,
                'ubicacion' => $request->input('ubicacion'),
                'estado' => $request->input('estado')
            ]);

        

            return response(['mensaje' => $lote], Response::HTTP_CREATED);
        }
    }

    public function mostrarLotes(){
        $usuario = Auth::user();
        $colaborador = Colaborador::where('id_usuario', $usuario->id)->value('id_colaborador');

        if ($colaborador) {
            $lotes = Lote::where('id_colaborador',$colaborador)->get();
            return response(['lotes' => $lotes], Response::HTTP_OK);
        } else {
            return response(['mensaje' => 'Usuario no tiene un colaborador asociado'], Response::HTTP_NOT_FOUND);
        }
    }

    public function eliminarLote($id){
        try {
            $lote = Lote::findOrFail($id);
            $lote->delete();

            return response(['message' => 'Lote eliminado correctamente'], Response::HTTP_OK);
        } catch (Exception $e) {
            return response(['error' => 'No se pudo eliminar el lote'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}

