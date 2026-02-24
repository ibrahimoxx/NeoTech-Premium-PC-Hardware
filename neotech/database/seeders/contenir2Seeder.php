<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\service;
use App\Models\demande;

class contenir2Seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i=1;$i<=10;$i++){
            $service=service::inRandomOrder()->first();
            $demande=demande::inRandomOrder()->first();
            DB::table('contenir_2')->
            insert([
                'codeService'=>$service->codeService,
                'codeDemande'=>$demande->codeDemande,
            ]);
        }
    }
}
