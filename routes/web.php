<?php

use App\Http\Controllers\MainDashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [MainDashboardController::class, 'index'])->name('dashboard');
});

Route::middleware('auth')->group(function () {
    Route::get('/lead-generation', function () {
        return Inertia::render('lead-generation/Index');
    })->name('dashboard.lead-gen.index');
});

Route::middleware('auth')->group(function () {
    Route::get('/lead-management', function () {
        return Inertia::render('lead-management/Index');
    })->name('dashboard.lead-man.index');
});
Route::middleware('auth')->group(function () {
    Route::get('/reports', function () {
        return Inertia::render('reports/Index');
    })->name('dashboard.reports.index');
});
require __DIR__ . '/settings.php';
require __DIR__ . '/keywords.php';
require __DIR__ . '/seo.php';
require __DIR__ . '/competitor.php';
require __DIR__ . '/auth.php';
