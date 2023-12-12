<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ComponenteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $datos = [
            [
                'nombre' => 'HDD',
                'hw' => '1',
                'cantidad' => 10,
            ],
            [
                'nombre' => 'Memoria RAM',
                'hw' => '1',
                'cantidad' => 20,
            ],

            [
                'nombre' => 'CPU',
                'hw' => '1',
                'cantidad' => 40,
            ],

            [
                'nombre' => 'Placa base',
                'hw' => '1',
                'cantidad' => 20,
            ],

            [
                'nombre' => 'Cadena',
                'hw' => '0',
                'cantidad' => 5,
            ],

            [
                'nombre' => 'Osito',
                'hw' => '0',
                'cantidad' => 8,
            ],

            [
                'nombre' => 'Gancho',
                'hw' => '0',
                'cantidad' => 12,
            ],

            [
                'nombre' => 'Enganche',
                'hw' => '0',
                'cantidad' => 7,
            ],

            [
                'nombre' => 'Base circular',
                'hw' => '0',
                'cantidad' => 3,
            ],

            [
                'nombre' => 'Base cuadrada',
                'hw' => '0',
                'cantidad' => 4,
            ],

            
            [
                'nombre' => 'Base pin',
                'hw' => '0',
                'cantidad' => 14,
            ],

            [
                'nombre' => 'Llavero',
                'hw' => '0',
                'cantidad' => 10,
            ],

            [
                'nombre' => 'Correa',
                'hw' => '0',
                'cantidad' => 69,
            ],
        ];

        DB::table('componente')->insert($datos);
    }
}
