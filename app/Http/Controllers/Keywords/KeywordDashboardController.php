<?php

namespace App\Http\Controllers\Keywords;

use App\Http\Controllers\Controller;
use App\Models\Keyword;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KeywordDashboardController extends Controller
{
    public function index()
    {
        $keywords = Keyword::query()->orderBy('keyword', 'asc')->get();
        return Inertia::render('keywords/Index', [
            'keywords' => $keywords
        ]);
    }
}
