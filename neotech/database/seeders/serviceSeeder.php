<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\technicien;

class serviceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i=1;$i<=10;$i++){
            $technicien=technicien::inRandomOrder()->first();
            DB::table('service')->
            insert([
                'codeTechnicien'=>$technicien->codeTechnicien,
                'Nom' => fake()->lastname(),
                'Description' => fake()->sentence(),
                'Disponibilité' => fake()->boolean(),
                'Montant'=>fake()->randomFloat(2, 100, 2500),
                'image' => fake()->imageUrl(640, 480, 'business'),
            ]);
        }
    }
}
