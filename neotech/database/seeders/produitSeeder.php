<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class produitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i=1;$i<=10;$i++){
            DB::table('produit')->
            insert([
                'Nom' => fake()->lastname(),
                'Description' => fake()->text(),
                'prixUnitaire' => fake()->randomFloat(2, 10, 1000),
                'promotion'=> fake()->randomFloat(2, 0, 50),
                'image'=>fake()->imageUrl(640, 480, 'technics'),
            ]);
        }
    }
}
