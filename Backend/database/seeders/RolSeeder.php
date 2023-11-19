<?php

namespace Database\Seeders;

use App\Models\Rol;
use Illuminate\Database\Seeder;

class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Rol::create(['descripcion'=>'Administrador']);
        Rol::create(['descripcion'=>'Diseñador']);
        Rol::create(['descripcion'=>'Colaborador']);
        Rol::create(['descripcion'=>'Clasificador']);
        Rol::create(['descripcion'=>'Diseñador']);
    }
}
