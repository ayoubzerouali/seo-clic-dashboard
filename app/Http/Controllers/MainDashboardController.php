<?php

namespace App\Http\Controllers;

use App\Models\Keyword;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MainDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('dashboard', [
            'statData' => $this->statData(),
            'topKeywordsData' => $this->topKeywordsData(),
        ]);
    }
    public function statData()
    {
        $topRankedKeywords = Keyword::where('position', '>=', 10)->count();
        return $topRankedKeywords;
    }

    public function topKeywordsData()
    {
        $topKeywordsData = Keyword::where('position', '>=', 10)
            ->select('id', 'keyword', 'position', 'volume', 'difficulty', 'trend_delta as trend')
            ->get();
        return $topKeywordsData;
    }
}
