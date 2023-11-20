<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diseñador extends Model
{
    use HasFactory;
    protected $table='disenador';

    protected $fillable = [
        'id_usuario'
    ];
}
