<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Competitor\CompetitorDashboardController;


Route::middleware('auth')->group(function () {
    Route::get('/competitor-intelligence', [CompetitorDashboardController::class, 'index'])
        ->name('dashboard.seo.index');
});
