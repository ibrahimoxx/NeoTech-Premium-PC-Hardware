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
        Schema::create('contenir', function (Blueprint $table) {
            $table->integer('qteCom');
             
            $table->unsignedBigInteger('codeProduit');
            $table->foreign('codeProduit')
            ->references('codeProduit')
            ->on('produit');

            $table->unsignedBigInteger('codeCommande');
            $table->foreign('codeCommande')
            ->references('codeCommande')
            ->on('commande');

            $table->primary(['codeProduit','codeCommande']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contenir');
    }
};
