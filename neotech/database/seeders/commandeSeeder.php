<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\utilisateur;

class commandeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i=1;$i<=10;$i++){
            $uti=utilisateur::inRandomOrder()->first();
            DB::table('commande')->
            insert([
                'dateCommande'=>fake()->date(),
                'codeUtilisateur'=>$uti->codeUtilisateur,
            ]);
        }
    }
}
