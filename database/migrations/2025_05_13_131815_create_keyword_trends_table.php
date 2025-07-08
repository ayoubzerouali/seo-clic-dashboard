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
        Schema::create('keyword_trends', function (Blueprint $table) {
            $table->id();
            $table->uuid('keyword_id');
            $table->date('snapshot_date');
            $table->unsignedInteger('position')->nullable();
            $table->unsignedInteger('volume')->nullable();
            $table->unsignedInteger('clicks')->nullable();
            $table->timestamps();

            $table->foreign('keyword_id')->references('id')->on('keywords')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('keyword_trends');
    }
};
