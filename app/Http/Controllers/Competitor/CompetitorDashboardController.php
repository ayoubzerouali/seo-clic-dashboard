<?php

namespace App\Http\Controllers\Competitor;

use App\Http\Controllers\Controller;
use App\Models\Keyword;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompetitorDashboardController extends Controller
{
    public function index()
    {
        /* $keywords = Keyword::query()->orderBy('keyword', 'asc')->get(); */
        return Inertia::render('competitors/Index', [
            'keywords' => []
        ]);
    }
}
