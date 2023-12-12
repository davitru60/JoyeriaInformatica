<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RecetaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $datos = [
            [
                'ID_Joya' => 1,
                'Descripcion' => 'Receta para pulseras de 4 partes',
            ],

            [
                'ID_Joya' => 2,
                'Descripcion' => 'Receta para llavero de RAM',
            ],

            [
                'ID_Joya' => 3,
                'Descripcion' => 'Receta para circulo collar de placa',
            ],

            [
                'ID_Joya' => 4,
                'Descripcion' => 'Receta para cuadrado collar de placa',
            ],

            [
                'ID_Joya' => 5,
                'Descripcion' => 'Receta para collar oso',
            ],

            [
                'ID_Joya' => 6,
                'Descripcion' => 'Receta para pin de placa',
            ],

            [
                'ID_Joya' => 7,
                'Descripcion' => 'Receta para pulsera de 4 partes cuadradas',
            ],

            [
                'ID_Joya' => 8,
                'Descripcion' => 'Receta para pendiente ositos',
            ]
            
        ];

        DB::table('receta')->insert($datos);
    }
}
