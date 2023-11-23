<?php

namespace App\Http\Controllers;

use App\Models\Administrador;
use App\Models\Clasificador;
use App\Models\Diseñador;
use App\Models\Rol;
use App\Models\User;
use App\Models\UsuarioRol;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UsuarioController extends Controller
{
    public function index()
    {
        $usuarios = User::all();
        return response()->json(['usuarios' => $usuarios]);
    }

    public function create()
    {
        return response()->json(['message' => 'Not supported for JSON response'], 400);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:255',
            'ape1' => 'required|string|max:255',
            'ape2' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'contrasena' => 'required|string|min:6',
            'foto' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], Response::HTTP_UNPROCESSABLE_ENTITY);
        } else {
            $usuario = User::create([
                'nombre' => $request['nombre'],
                'ape1' => $request['ape1'],
                'ape2' => $request['ape2'],
                'email' => $request['email'],
                'password' => bcrypt($request['contrasena']),
                'foto' => $request['foto']

            ]);

            $roles = $request->input('roles');
            $this->crearTipoUsuario($usuario, $roles);

            $respuestasRoles = $this->crearUsuarioPorRol($usuario, $request->input('roles'));

            return response()->json([
                'usuario' => $usuario,
                'respuestasRoles' => $respuestasRoles,
            ], Response::HTTP_CREATED);
        }

    }

    public function buscar($id_usuario)
    {
        $usuario = User::find($id_usuario);

        if (!$usuario) {
            return response()->json(['message' => 'Usuario no encontrado'], 404);
        }

        return response()->json(['usuario' => $usuario]);
    }

    public function update(Request $request, User $usuario)
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
        $usuario = User::find($id_usuario);
        $usuario->delete();

        return response()->json(['message' => 'Usuario eliminado exitosamente']);
    }

    protected function crearUsuarioPorRol(User $usuario, array $roles)
    {
        $respuestas = [];
        foreach ($roles as $rolNombre) {

            $rol = Rol::where('descripcion', $rolNombre)->first();

            if ($rol) {
                UsuarioRol::create([
                    'id_usuario' => $usuario->id,
                    'id_rol' => $rol->id_rol,
                ]);

                $respuestas[] = [
                    'rol' => $rolNombre,
                    'mensaje' => 'Rol asignado correctamente',
                ];


            } else {
                $respuestas[] = [
                    'rol' => $rol,
                    'mensaje' => 'Rol no encontrado'
                ];
            }
        }

        return $respuestas;
    }

    protected function crearTipoUsuario(User $usuario, array $roles)
    {
        foreach ($roles as $rol) {
            switch ($rol) {
                case 'Diseñador':
                    $this->crearDisenador($usuario);
                    break;
                case 'Administrador':
                    $this->crearAdministrador($usuario);
                    break;

                case 'Clasificador':
                    $this->crearAdministrador($usuario);
                    break;
            }
        }
    }


    protected function crearDisenador(User $usuario)
    {
        Diseñador::create(['id_usuario' => $usuario->id]);
    }

    protected function crearAdministrador(User $usuario)
    {
        Administrador::create(['id_usuario' => $usuario->id]);
    }

    protected function crearClasificador(User $usuario)
    {
        Clasificador::create(['id_usuario' => $usuario->id]);
    }
}
