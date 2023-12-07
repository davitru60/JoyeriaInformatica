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
        Schema::create('ingrediente', function (Blueprint $table) {
            $table->id('id_ing');
            $table->unsignedBigInteger('id_receta');
            $table->unsignedBigInteger('id_comp');
            $table->integer('cantidad');
            $table->foreign('id_receta')->references('id_receta')->on('receta')->onDelete('cascade');
            $table->foreign('id_comp')->references('id_comp')->on('componente')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ingrediente');
    }
};
