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
        Joya::create(['nombre'=>'Pulseras de 4 partes','foto'=>'IMG_20231126_185251.jpg']);
        Joya::create(['nombre'=>'Llavero de placa','foto'=>'IMG_20231124_120734.jpg']);
        Joya::create(['nombre'=>'Circulo collar de placa','foto'=>'IMG_20231126_115619.jpg']);
        Joya::create(['nombre'=>'Cuadrado collar de placa','foto'=>'IMG_20231124_115729.jpg']);
        Joya::create(['nombre'=>'Collar oso','foto'=>'IMG_20231124_115514_1.jpg']);
        Joya::create(['nombre'=>'Pin de placa','foto'=>'IMG_20231124_120320.jpg']);
        Joya::create(['nombre'=>'Pulsera de 4 partes cuadradas','foto'=>'IMG_20231124_120901.jpg']);
        Joya::create(['nombre'=>'Pendiente ositos','foto'=>'IMG_20231211_0001.png']);
    }
}
