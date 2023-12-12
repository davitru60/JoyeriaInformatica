<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RolSeeder::class);
        $this->call(ComponenteSeeder::class);
        $this->call(JoyasSeeder::class);
        $this->call(RecetaSeeder::class);
        $this->call(IngredienteSeed::class);

    }
}
