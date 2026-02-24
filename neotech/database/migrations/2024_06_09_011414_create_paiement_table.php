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
        Schema::create('paiement', function (Blueprint $table) {
            $table->id('codePaiement');
            $table->string('Méthode');
            $table->string('Montant');
            $table->string('status');
            $table->unsignedBigInteger('codeCommande');
            $table->foreign('codeCommande')
            ->references('codeCommande')
            ->on('commande');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('paiement');
    }
};
