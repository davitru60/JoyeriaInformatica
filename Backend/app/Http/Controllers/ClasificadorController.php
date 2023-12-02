<?php

namespace App\Http\Controllers;

use App\Models\Clasificador;
use App\Models\Lote;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ClasificadorController extends Controller
{
    public function despiezarLote(Request $request){
        $usuario = Auth::user();
        $clasificadorId = Clasificador::where('id_clasificador',$usuario->id)->value('id_clasificador');

        $lote = Lote::find($request->input('id_lote'));

        if($lote && $lote->estado != 'Clasificado'){

        }


    }

    private function agregarComponentes(){
        
    }
}
