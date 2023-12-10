<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Colaborador;
use App\Models\Rol;
use App\Models\User;
use App\Models\UsuarioRol;
use Exception;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
            'contrasena' => 'required|string|min:6'
        ]);

        $mensajesPersonalizados = [
            'nombre.required' => "El campo nombre es obligatorio",
            'ape1.required' => "El campo primer apellido es obligatorio",
            'ape2.required' => "El campo segundo apellido es obligatorio",
            'email.required' => "El campo email es obligatorio",
            'contrasena.required'=> "El campo contraseña es obligatorio",
            'email.unique' => "El email ya existe",
        ];

        $validator->setCustomMessages($mensajesPersonalizados);



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

        
            $respuestasRoles = $this->crearColaborador($usuario);
            $this->crearUsuarioRol($usuario);

            return response()->json([
                'usuario' => $usuario,
                'respuestasRoles' => $respuestasRoles,
            ], Response::HTTP_CREATED);
        }
    }


    

    protected function crearUsuarioRol(User $usuario){
        UsuarioRol::create([
            'id_usuario' => $usuario->id,
            'id_rol' => 3
        ]);
    
    }

    protected function crearColaborador(User $usuario)
    {
        try{
            Colaborador::create(['id_usuario' => $usuario->id]);
            return response(['mensaje' => 'Colaborador creado exitosamente'], Response::HTTP_OK);
        }catch(Exception $e){
            return response(['error' => 'Error al crear el colaborador', 'message' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
       
    }

    public function login(Request $request)
    {
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

    public function perfilUsuario()
    {
        return response(['usuario' => Auth::user()],Response::HTTP_OK);
    }

    
    public function obtenerRoles()
    {
        $descripcionRoles = Rol::join('usuario_rol', 'rol.id_rol', '=', 'usuario_rol.id_rol')
            ->where('usuario_rol.id_usuario', Auth::user()->id)
            ->pluck('rol.descripcion');
        return response(['usuario' => $descripcionRoles],Response::HTTP_OK);
        
            
        
    }

}
