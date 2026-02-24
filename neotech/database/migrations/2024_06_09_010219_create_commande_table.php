<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('commande', function (Blueprint $table) {
            $table->id('codeCommande');
            $table->date('dateCommande');
            $table->unsignedBigInteger('codeUtilisateur');
            $table->foreign('codeUtilisateur')
            ->references('codeUtilisateur')
            ->on('utilisateur');
            
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commande');
    }
};
