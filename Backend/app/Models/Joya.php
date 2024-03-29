<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Joya extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_joya';
    protected $table = 'joya';

    protected $fillable = [
        'nombre',
        'foto'
    ];
}
