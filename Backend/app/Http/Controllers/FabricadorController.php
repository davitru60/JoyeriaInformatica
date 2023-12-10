<?php

namespace App\Http\Controllers;

use App\Models\Componentes;
use Illuminate\Http\Request;

class FabricadorController extends Controller
{
    public function verificarComponentes(Request $request)
    {

        $componentesNecesarios = $request->input('ingredientes');
        $response = [];

        foreach ($componentesNecesarios as $componente) {
            $nombre = $componente['nombre'];
            $cantidadNecesaria = $componente['cantidad'];

            // Obtener la cantidad disponible del componente
            $cantidadDisponible = Componentes::where('nombre', $nombre)->value('cantidad');

            // Verificar si hay suficientes componentes
            if ($cantidadDisponible < $cantidadNecesaria) {
                $response[] = [
                    'nombre' => $nombre,
                    'disponibilidad' => false,
                    'codigo' => 'NO_SUFICIENTES_COMPONENTES',
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

        // Recoger las cantidades disponibles de cada componente
        $cantidadesDisponibles = [];

        foreach ($componentesNecesarios as $componente) {
            $nombre = $componente['nombre'];

            // Obtener la cantidad disponible del componente
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

}
