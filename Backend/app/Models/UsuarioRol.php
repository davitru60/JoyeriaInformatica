<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsuarioRol extends Model
{
    use HasFactory;
    protected $table = 'usuario_rol';

    protected $fillable = [
        'id_usuario',
        'id_rol'
    ];

    public function usuario()
    {
        return $this->belongsTo(Usuario::class);
    }

    public function rol()
    {
        return $this->belongsTo(Rol::class);
    }

}
