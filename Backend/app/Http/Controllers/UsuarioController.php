<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use GuzzleHttp\Psr7\Response;
use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Js;

class UsuarioController extends Controller
{
    public function index()
    {
        $usuarios = Usuario::all();
        return response()->json(['usuarios' => $usuarios]);
    }

    public function create()
    {
        return response()->json(['message' => 'Not supported for JSON response'], 400);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'ape1' => 'required',
            'ape2' => 'required',
            'email' => 'required|email|unique:usuario,email',
            'contrasena' => 'required',
            'foto' => 'required',
        ]);

        // Crear un nuevo usuario de forma manual
        $usuario = new Usuario();
        $usuario->nombre = $request->input('nombre');
        $usuario->ape1 = $request->input('ape1');
        $usuario->ape2 = $request->input('ape2');
        $usuario->email = $request->input('email');
        $usuario->contrasena = $request->input('contrasena');
        $usuario->foto = $request->input('foto');
        $usuario->save();

        return response()->json(['usuario' => $usuario, 'message' => 'Usuario creado exitosamente']);

    }

    public function buscar($id_usuario)
    {
        $usuario = Usuario::find($id_usuario);

        if (!$usuario) {
            return response()->json(['message' => 'Usuario no encontrado'], 404);
        }

        return response()->json(['usuario' => $usuario]);
    }

    public function update(Request $request, Usuario $usuario)
    {
        $request->validate([
            'nombre' => 'required',
            'ape1' => 'required',
            'ape2' => 'required',
            'email' => 'required|email',
            'contrasena' => 'required',
            'foto' => 'required',
        ]);
    
        $usuario->update($request->all());
    
        return response()->json(['usuario' => $usuario, 'message' => 'Usuario actualizado exitosamente']);
    }

    public function destroy($id_usuario)
    {
        $usuario = Usuario::find($id_usuario);
        $usuario->delete();
    
        return response()->json(['message' => 'Usuario eliminado exitosamente']);
    }
}
