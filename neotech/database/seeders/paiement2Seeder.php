<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\demande;

class paiement2Seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i=1;$i<=10;$i++){
            $demande=demande::inRandomOrder()->first();
            DB::table('paiement_2')->
            insert([
                'codeDemande'=>$demande->codeDemande,
                'Méthode' => fake()->randomElement(['Carte de crédit', 'PayPal', 'Virement bancaire']),
                'Montant' => fake()->randomFloat(2, 10, 1000),
                'status' => fake()->randomElement(['Payé', 'En attente', 'Échoué']),
            ]);
        }
    }
}
