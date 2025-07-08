<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Keywords\KeywordDashboardController;


Route::middleware('auth')->group(function () {
    Route::get('/keyword-research', [KeywordDashboardController::class, 'index'])
        ->name('dashboard.keywords.index');
});
