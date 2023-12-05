<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Colaborador extends Model
{
    use HasFactory;
    protected $table = 'colaborador';
    protected $fillable = [
        'id_usuario'
    ];

    public function lote()
    {
        return $this->hasMany(Lote::class, 'id_colaborador');
    }
}
