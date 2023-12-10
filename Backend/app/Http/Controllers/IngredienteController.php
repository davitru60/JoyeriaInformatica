<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IngredienteController extends Controller
{
    public function mostrarIngredientes()
    {
        $ingredientes = DB::table('receta as rec')
            ->join('ingrediente as ing', 'rec.id_receta', '=', 'ing.id_receta')
            ->join('componente as comp', 'comp.id_comp', '=', 'ing.id_comp')
            ->select('rec.descripcion', 'comp.nombre as componente', 'ing.cantidad')
            ->get();

        return response()->json(['ingredientes' => $ingredientes]);
    }

    public function mostrarIngrendienteJoya($id)
    {
        $ingredientes = DB::table('receta as rec')
            ->join('ingrediente as ing', 'rec.id_receta', '=', 'ing.id_receta')
            ->join('componente as comp', 'comp.id_comp', '=', 'ing.id_comp')
            ->join('joya as joy', 'rec.id_joya', '=', 'joy.id_joya')
            ->where('rec.id_joya', $id)
            ->select('comp.nombre', 'ing.cantidad')
            ->get();

        return response()->json(['ingredientes'=>$ingredientes]);
    }
}
