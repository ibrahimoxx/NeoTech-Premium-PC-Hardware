<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\livreur;
use App\Models\commande;

class livraisonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i=1;$i<=10;$i++){
            $livreur=livreur::inRandomOrder()->first();
            $commande=commande::inRandomOrder()->first();
            DB::table('livraison')->
            insert([
                'codeLivreur'=>$livreur->codeLivreur,
                'codeCommande'=>$commande->codeCommande,
                'dateLivraison' => fake()->dateTimeBetween('now', '+1 year'),
                'status' => fake()->randomElement(['En cours', 'Livré', 'Annulé']),
                'Adress'=> fake()->address(),
            ]);
        }
    }
}
