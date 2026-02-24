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
        Schema::create('service', function (Blueprint $table) {
            $table->id('codeService');
            $table->string('Nom');
            $table->string('Description');
            $table->boolean('Disponibilité');
            $table->string('Montant');
            $table->string('Image');
            $table->unsignedBigInteger('codeTechnicien');
            $table->foreign('codeTechnicien')
            ->references('codeTechnicien')
            ->on('technicien');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service');
    }
};
