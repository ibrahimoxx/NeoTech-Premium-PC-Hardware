<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\commande;

class paiementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i=1;$i<=10;$i++){
            $commande=commande::inRandomOrder()->first();
            DB::table('paiement')->
            insert([
                'codeCommande'=>$commande->codeCommande,
                'Méthode' => fake()->randomElement(['Carte de crédit', 'PayPal', 'Virement bancaire']),
                'Montant' => fake()->randomFloat(2, 10, 1000),
                'status' => fake()->randomElement(['Payé', 'En attente', 'Échoué']),
            ]);
        }
    }
}
