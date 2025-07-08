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
        Schema::create('keywords', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('project_id')->nullable(); // optional, multi-project
            $table->string('keyword');
            $table->unsignedInteger('volume')->nullable();
            $table->unsignedInteger('difficulty')->nullable();
            $table->unsignedSmallInteger('position')->nullable(); // current SERP rank
            $table->string('url')->nullable();
            $table->float('trend_delta')->nullable(); // +3, -2, etc.
            $table->enum(
                'intent',
                ['informational', 'commercial', 'navigational', 'transactional']
            )->nullable();
            $table->uuid('cluster_id')->nullable(); // if clustered
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('keywords');
    }
};
