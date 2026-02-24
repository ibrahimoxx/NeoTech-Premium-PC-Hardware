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
        Schema::table('contenir', function (Blueprint $table) {
            $table->string('quantitéStock')->after('codeCommande');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('contenir', function (Blueprint $table) {
            $table->dropColumn('quantitéStock');
        });
    }
};
