<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lote extends Model
{
    use HasFactory;

    protected $table = 'lote';
    
    protected $fillable = [
        'id_colaborador',
        'id_clasificador',
        'ubicacion',
        'estado'
    ];

    public function colaborador()
    {
        return $this->belongsTo(Colaborador::class, 'id_colaborador');
    }
}
