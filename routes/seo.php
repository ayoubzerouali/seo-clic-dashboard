
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Seo\SeoDashboardController;


Route::middleware('auth')->group(function () {
    Route::get('/seo-audit', [SeoDashboardController::class, 'index'])
        ->name('dashboard.seo.index');
});
