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
        Schema::create('lote', function (Blueprint $table) {
            $table->id('id_lote');
            $table->unsignedBigInteger('id_colaborador');
            $table->unsignedBigInteger('id_clasificador')->nullable();
            $table->string('ubicacion');
            $table->string('estado');
            $table->foreign('id_colaborador')->references('id_colaborador')->on('colaborador')->onDelete('cascade');
            $table->foreign('id_clasificador')->references('id_clasificador')->on('clasificador')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lote');
    }
};
