<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Usuario
 *
 * @property $id_usuario
 * @property $nombre
 * @property $ape1
 * @property $ape2
 * @property $email
 * @property $contrasena
 * @property $foto
 * @property $created_at
 * @property $updated_at
 *
 * @property Admin[] $admins
 * @property Clasificador[] $clasificadors
 * @property Colaborador[] $colaboradors
 * @property Disenador[] $disenadors
 * @property UsuarioRol[] $usuarioRols
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Usuario extends Model
{
    
    static $rules = [
		'id_usuario' => 'required',
		'nombre' => 'required',
		'ape1' => 'required',
		'ape2' => 'required',
		'email' => 'required',
		'contrasena' => 'required',
		'foto' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['id_usuario','nombre','ape1','ape2','email','contrasena','foto'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function admins()
    {
        return $this->hasMany('App\Models\Admin', 'id_usuario', 'id_usuario');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function clasificadors()
    {
        return $this->hasMany('App\Models\Clasificador', 'id_usuario', 'id_usuario');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function colaboradors()
    {
        return $this->hasMany('App\Models\Colaborador', 'id_usuario', 'id_usuario');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function disenadors()
    {
        return $this->hasMany('App\Models\Disenador', 'id_usuario', 'id_usuario');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function usuarioRols()
    {
        return $this->hasMany('App\Models\UsuarioRol', 'id_usuario', 'id_usuario');
    }
    

}
