<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Componentes extends Model
{
    use HasFactory; 


    protected $table = 'componente';
    protected $primaryKey = 'id_comp';
    protected $fillable = [
        'nombre',
        'hw',
        'cantidad'
    ];
}
