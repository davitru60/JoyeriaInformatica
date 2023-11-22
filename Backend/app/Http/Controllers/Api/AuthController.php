<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Colaborador;
use App\Models\Rol;
use App\Models\User;
use App\Models\UsuarioRol;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{

    public function register(Request $request){
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
        }else{
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
                case 'Colaborador':
                    $this->crearColaborador($usuario);
                    break;
            }
        }
    }

    protected function crearColaborador(User $usuario)
    {
        Colaborador::create(['id_usuario' => $usuario->id]);
    }

    public function login(Request $request){
        $credenciales = [
            'email' => $request->input('email'),
            'password' => $request->input('contrasena'),
        ];

        if (Auth::attempt($credenciales)) {
            $token = Auth::user()->createToken('token')->plainTextToken;
            return response(['token' => $token], Response::HTTP_OK);
        } else {
            return response(['error' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }
        
    }

    
    
}
