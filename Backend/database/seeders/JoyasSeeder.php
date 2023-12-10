<?php

namespace Database\Seeders;

use App\Models\Joya;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JoyasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    { 
        Joya::create(['nombre'=>'Pulsera de 4 partes','foto'=>'IMG_20231126_185251.jpg']);
        Joya::create(['nombre'=>'Llavero de placa','foto'=>'IMG_20231124_120734.jpg']);
        Joya::create(['nombre'=>'Circulo collar de placa','foto'=>'IMG_20231126_115619.jpg']);
    }
}
