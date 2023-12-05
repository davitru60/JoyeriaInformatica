<?php

namespace App\Http\Middleware;

use App\Models\UsuarioRol;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class Clasificador
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    /*public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();

        if($user && $this->tieneRol($user->id,4)){
            return $next($request);
        }else{
          
        }
   
    } */

    private function tieneRol($idUsuario,$idRol){
        return UsuarioRol::where('id_usuario', $idUsuario)
            ->where('id_rol', $idRol)
            ->exists();
    }
}
