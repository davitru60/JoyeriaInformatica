<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Despiece extends Model
{
    use HasFactory;

    protected $table = 'despiece';

    protected $primaryKey = 'id_despiece';
    protected $fillable = [
        'id_lote',
        'id_comp',
        'cantidad',
        'descripcion',
    ];
}
