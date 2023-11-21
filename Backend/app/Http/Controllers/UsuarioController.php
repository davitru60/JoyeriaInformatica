<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    public function index()
    {
        $usuarios = Usuario::all();
        return view('usuarios.index', compact('usuarios'));
    }

    public function create()
    {
        return view('usuarios.create');
    }

    public function store(Request $request)
    {
        // Valida los datos del formulario
        $request->validate([
            'nombre' => 'required',
            'ape1' => 'required',
            'ape2' => 'required',
            'email' => 'required|email',
            'contrasena' => 'required',
            'foto' => 'required',
        ]);

        // Crea un nuevo usuario
        Usuario::create($request->all());

        return redirect()->route('usuarios.index')
            ->with('success', 'Usuario creado exitosamente');
    }

    public function edit(Usuario $usuario)
    {
        return view('usuarios.edit', compact('usuario'));
    }

    public function update(Request $request, Usuario $usuario)
    {
        // Valida los datos del formulario
        $request->validate([
            'nombre' => 'required',
            'ape1' => 'required',
            'ape2' => 'required',
            'email' => 'required|email',
            'contrasena' => 'required',
            'foto' => 'required',
        ]);

        // Actualiza los datos del usuario
        $usuario->update($request->all());

        return redirect()->route('usuarios.index')
            ->with('success', 'Usuario actualizado exitosamente');
    }

    public function destroy(Usuario $usuario)
    {
        // Elimina el usuario
        $usuario->delete();

        return redirect()->route('usuarios.index')
            ->with('success', 'Usuario eliminado exitosamente');
    }
}
