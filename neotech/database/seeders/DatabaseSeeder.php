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
        $this->call([
            utilisateurSeeder::class,
            commandeSeeder::class,
            demandeSeeder::class,
            technicienSeeder::class,
            livreurSeeder::class,
            produitSeeder::class,
            paiementSeeder::class,
            paiement2Seeder::class,
            serviceSeeder::class,
            livraisonSeeder::class,
            contenirSeeder::class,
            contenir2Seeder::class,
        ]);
    }
}
