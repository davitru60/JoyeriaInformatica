<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Administrador;
use App\Models\Clasificador;
use App\Models\Colaborador;
use App\Models\Diseñador;
use App\Models\Rol;
use App\Models\Usuario;
use App\Models\UsuarioRol;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{

    public function registrar(Request $request)
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
            return response(['errores' => $validator->errors()->all()], Response::HTTP_UNPROCESSABLE_ENTITY);
        } else {
            $usuario = Usuario::create([
                'nombre' => $request['nombre'],
                'ape1' => $request['ape1'],
                'ape2' => $request['ape2'],
                'email' => $request['email'],
                'contrasena' => bcrypt($request['contrasena']),
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

    protected function crearUsuarioPorRol(Usuario $usuario, array $roles)
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

    protected function crearTipoUsuario(Usuario $usuario, array $roles)
    {
        foreach ($roles as $rol) {
            switch ($rol) {
                case 'Administrador':
                    $this->crearAdmin($usuario);
                    break;
                case 'Clasificador':
                    $this->crearClasificador($usuario);
                    break;
                case 'Diseñador':
                    $this->crearDisenador($usuario);
                    break;
                case 'Colaborador':
                    $this->crearColaborador($usuario);
                    break;
            }
        }
    }

    protected function crearAdmin(Usuario $usuario)
    {
        Administrador::create(['id_usuario' => $usuario->id]);
    }


    protected function crearClasificador(Usuario $usuario)
    {
        Clasificador::create(['id_usuario' => $usuario->id]);
    }

    protected function crearDisenador(Usuario $usuario)
    {
        Diseñador::create(['id_usuario' => $usuario->id]);
    }

    protected function crearColaborador(Usuario $usuario)
    {
        Colaborador::create(['id_usuario' => $usuario->id]);
    }
}
