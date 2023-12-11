<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IngredienteSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $datos = [
            [
                'id_receta' => 1,
                'id_comp' => 2,
                'cantidad' => 1
            ],

            [
                'id_receta' => 1,
                'id_comp' => 9,
                'cantidad' => 4
            ],

            [
                'id_receta' => 1,
                'id_comp' => 13,
                'cantidad' => 1
            ],

            [
                'id_receta' => 2,
                'id_comp' => 12,
                'cantidad' => 1
            ],

            [
                'id_receta' => 2,
                'id_comp' => 2,
                'cantidad' => 1
            ],

            [
                'id_receta' => 3,
                'id_comp' => 4,
                'cantidad' => 1
            ],

            [
                'id_receta' => 3,
                'id_comp' => 8,
                'cantidad' => 1
            ],

            [
                'id_receta' => 3,
                'id_comp' => 9,
                'cantidad' => 1
            ],


            [
                'id_receta' => 4,
                'id_comp' => 4,
                'cantidad' => 1
            ],

            [
                'id_receta' => 4,
                'id_comp' => 8,
                'cantidad' => 1
            ],

            [
                'id_receta' => 4,
                'id_comp' => 10,
                'cantidad' => 1
            ],

            [
                'id_receta' => 5,
                'id_comp' => 1,
                'cantidad' => 2
            ],

            [
                'id_receta' => 5,
                'id_comp' => 5,
                'cantidad' => 1
            ],

            [
                'id_receta' => 5,
                'id_comp' => 6,
                'cantidad' => 1
            ],
            
            [
                'id_receta' => 6,
                'id_comp' => 4,
                'cantidad' => 1
            ],

            [
                'id_receta' => 6,
                'id_comp' => 11,
                'cantidad' => 1
            ],
            
            [
                'id_receta' => 7,
                'id_comp' => 2,
                'cantidad' => 1
            ],

            [
                'id_receta' => 7,
                'id_comp' => 10,
                'cantidad' => 4
            ],
            
            [
                'id_receta' => 7,
                'id_comp' => 13,
                'cantidad' => 1
            ],

            [
                'id_receta' => 8,
                'id_comp' => 1,
                'cantidad' => 2
            ],

            [
                'id_receta' => 8,
                'id_comp' => 6,
                'cantidad' => 1
            ],

            [
                'id_receta' => 8,
                'id_comp' => 7,
                'cantidad' => 2
            ],
           
        ];

        // Insertar datos en la tabla utilizando Query Builder
        DB::table('ingrediente')->insert($datos);
    }
}
