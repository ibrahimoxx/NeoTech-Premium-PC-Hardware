<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class livreurSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i=1;$i<=10;$i++){
            DB::table('livreur')->
            insert([
                'Nom' => fake()->lastname(),
                'Prénom' => fake()->firstname(),
                'numéroTéléphone' => fake()->unique()->phoneNumber(),
                'adresseEmail'=> fake()->unique()->safeEmail(),
            ]);
        }
    }
}
