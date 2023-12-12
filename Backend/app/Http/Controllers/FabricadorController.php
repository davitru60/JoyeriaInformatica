<?php

namespace App\Http\Controllers;

use App\Models\Componentes;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class FabricadorController extends Controller
{
    public function verificarComponentes(Request $request)
    {

        $componentesNecesarios = $request->input('ingredientes');
        $response = [];

        foreach ($componentesNecesarios as $componente) {
            $nombre = $componente['nombre'];
            $cantidadNecesaria = $componente['cantidad'];

            $cantidadDisponible = Componentes::where('nombre', $nombre)->value('cantidad');

  
            if ($cantidadDisponible < $cantidadNecesaria) {
                $response[] = [
                    'nombre' => $nombre,
                    'disponibilidad' => false,
                    'cantDisponible' => $cantidadDisponible,
                ];
            } else {
                $response[] = [
                    'nombre' => $nombre,
                    'disponibilidad' => true,
                    'cantDisponible' => $cantidadDisponible,
                ];
            }
        }

        return response()->json($response);
    }

    public function calcularCantidadJoyas(Request $request)
    {
        $componentesNecesarios = $request->input('ingredientes');

        $cantidadesDisponibles = [];

        foreach ($componentesNecesarios as $componente) {
            $nombre = $componente['nombre'];

            $cantidadDisponible = Componentes::where('nombre', $nombre)->value('cantidad');

            $cantidadesDisponibles[$nombre] = $cantidadDisponible;
        }

        // Calcular la cantidad máxima de joyas que se pueden hacer
        $cantidadMinima = PHP_INT_MAX;

        foreach ($componentesNecesarios as $componente) {
            $nombre = $componente['nombre'];
            $cantidadNecesaria = $componente['cantidad'];

            // Calcular la cantidad máxima de joyas que se pueden hacer con este componente
            $cantidadMaxima = $cantidadesDisponibles[$nombre] / $cantidadNecesaria;

            // Actualizar la cantidad mínima si es necesario
            $cantidadMinima = min($cantidadMinima, $cantidadMaxima);
        }

        return response()->json(['cantidad_maxima_joyas' => floor($cantidadMinima)]);
    }


    public function fabricarJoyas(Request $request)
    {
        $componentesNecesarios = $request->input('ingredientes');
        $mensajeError = null;
    
        foreach ($componentesNecesarios as $componente) {
            $nombre = $componente['nombre'];
            $cantidadNecesaria = $componente['cantidad'];
    
            $componenteDB = Componentes::where('nombre', $nombre)->first();
    
            if ($componenteDB->cantidad >= $cantidadNecesaria) {
                $componenteDB->cantidad -= $cantidadNecesaria;
                $componenteDB->save();
            } else {
                // Guardar el mensaje de error pero seguir iterando por si hay otros componentes con problemas
                $mensajeError = 'No hay suficientes componentes disponibles para fabricar la joya';
            }
        }
    
        if ($mensajeError !== null) {
            return response()->json(['mensaje' => $mensajeError], Response::HTTP_BAD_REQUEST);
        }
    
        return response()->json(['mensaje' => 'Joya fabricada con éxito'], Response::HTTP_OK);
    }

}
