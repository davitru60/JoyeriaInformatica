<?php

namespace App\Http\Controllers;

use App\Models\Clasificador;
use App\Models\Componentes;
use App\Models\Despiece;
use App\Models\Lote;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;



class ClasificadorController extends Controller
{
    public function despiezarLote(Request $request, $idLote)
{
    try {
        $validator = Validator::make($request->all(), [
            'id_comp' => 'required',
            'cantidad' => 'required|integer|min:1',
            'descripcion' => 'required|string',
        ]);

        $mensajesPersonalizados = [
            'cantidad.required' => "El campo cantidad es obligatorio",
            'descripcion.required' => "El campo descripción es obligatorio",
            'cantidad.integer' => "El campo cantidad debe ser un número entero",
            'cantidad.min' => "La cantidad minima debe ser al menos 1"
        ];

        $validator->setCustomMessages($mensajesPersonalizados);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->all()], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $lote = Lote::find($idLote);

        if ($lote->estado == 'Clasificado') {
            return response()->json(['error' => 'No se puede despiezar un lote clasificado'], Response::HTTP_BAD_REQUEST);
        }


        $usuario = Auth::user();
        $clasificador = Clasificador::where('id_usuario', $usuario->id)->first();

        $comp = Componentes::where('id_comp',$request->input('id_comp'))->first();
        $nuevaCantidad = $comp->cantidad + $request->input('cantidad');
        $comp ->update(['cantidad'=>$nuevaCantidad]);


        $componente = [
            'id_lote' => $idLote,
            'id_comp' => $request->input('id_comp'),
            'cantidad' => $request->input('cantidad'),
            'descripcion' => $request->input('descripcion')
        ];

        $this->agregarDespiece($componente, $clasificador->id_clasificador);

        return response()->json(['mensaje' => 'Despiece agregado correctamente'], Response::HTTP_CREATED);

    } catch (Exception $e) {
        return response()->json(['error' => 'Error al despiezar el lote', 'detalles' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}


    private function agregarDespiece($componente, $idClasificador)
    {
        try {
            $lote = Lote::find($componente['id_lote']);
            if (!$lote) {
                return response()->json(['error' => 'Lote no encontrado'], Response::HTTP_NOT_FOUND);
            }

            Despiece::create($componente);
            $this->modificarLote($componente['id_lote'], $idClasificador);

            return response()->json(['mensaje' => 'Despiece agregado correctamente'], Response::HTTP_CREATED);

        } catch (Exception $e) {
            return response()->json(['error' => 'Error al agregar el despiece', 'detalles' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    private function modificarLote($idLote, $idClasificador)
    {
        try {
            $lote = Lote::find($idLote);
            if (!$lote) {
                return response()->json(['error' => 'Lote no encontrado'], Response::HTTP_NOT_FOUND);
            }

            $lote->update([
                'estado' => 'Recibido',
                'id_clasificador' => $idClasificador
            ]);

            return response()->json(['mensaje' => 'Lote modificado correctamente'], Response::HTTP_OK);

        } catch (Exception $e) {
            return response()->json(['error' => 'Error al modificar el lote', 'detalles' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function modificarEstadoLote(Request $request, $idLote)
{
    try {
        $lote = Lote::find($idLote);
        $usuario = Auth::user();
        $clasificador = Clasificador::where('id_usuario', $usuario->id)->first();

        if (!$lote) {
            return response()->json(['error' => 'No se encontró el lote'], Response::HTTP_NOT_FOUND);
        } else {
            $validator = Validator::make($request->all(), [
                'estado' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => 'Datos de entrada no válidos'], Response::HTTP_UNPROCESSABLE_ENTITY);
            } else {
                $lote->update([
                    'id_clasificador'=> $clasificador->id_clasificador,
                    'estado' => $request['estado']
                ]);

                return response()->json(['mensaje' => 'Estado del lote modificado correctamente'], Response::HTTP_OK);
            }
        }
    } catch (Exception $e) {
        return response()->json(['error' => 'Error al modificar el estado del lote', 'detalles' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}

}
