<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Usuario;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
class AuthController extends Controller
{
 
    public function registrar(Request $request){
        $validator=Validator::make($request->all(),[
            'nombre'=> 'required|string|max:255',
            'ape1' => 'required|string|max:255',
            'ape2' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'contrasena' => 'required|string|min:6|confirmed',
            'foto'=> 'required|string'
        ]);

        if($validator->fails()){
            return response(['errores' => $validator->errors()->all()],Response::HTTP_UNPROCESSABLE_ENTITY) ;
        }else{
            $usuario = Usuario::create([
                'nombre'=>$request['nombre'],
                'ape1'=>$request['ape1'],
                'ape2'=>$request['ape2'],
                'email'=>$request['email'],
                'password'=>bcrypt($request['contrasena']),
                'foto'=>$request['foto']
            ]);

            return response($usuario, Response::HTTP_CREATED);
        }
    }
}
