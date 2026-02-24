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
        Schema::create('contenir_2', function (Blueprint $table) {
            $table->unsignedBigInteger('codeService');
            $table->foreign('codeService')
            ->references('codeService')
            ->on('service');

            $table->unsignedBigInteger('codeDemande');
            $table->foreign('codeDemande')
            ->references('codeDemande')
            ->on('demande');

            $table->primary(['codeService','codeDemande']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contenir_2');
    }
};
