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
        Schema::create('despiece', function (Blueprint $table) {
            $table->unsignedBigInteger('id_lote');
            $table->unsignedBigInteger('id_comp');
            $table->string('cantidad');
            $table->string('descripcion');
            $table->foreign('id_lote')->references('id_lote')->on('lote')->onDelete('cascade');
            $table->foreign('id_comp')->references('id_comp')->on('componente')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('despiece');
    }
};
