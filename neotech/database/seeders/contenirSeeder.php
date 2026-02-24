<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\produit;
use App\Models\commande;

class contenirSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i=1;$i<=10;$i++){
            $produit=produit::inRandomOrder()->first();
            $commande=commande::inRandomOrder()->first();
            DB::table('contenir')->
            insert([
                'codeProduit'=>$produit->codeProduit,
                'codeCommande'=>$commande->codeCommande,
                'quantitéStock'=>fake()->numberBetween(1, 100),
            ]);
        }
    }
}
