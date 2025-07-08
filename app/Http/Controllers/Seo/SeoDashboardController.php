<?php

namespace App\Http\Controllers\Seo;

use App\Http\Controllers\Controller;
use App\Models\Keyword;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SeoDashboardController extends Controller
{
    public function index()
    {
        /* $soe = Keyword::query()->orderBy('keyword', 'asc')->get(); */
        return Inertia::render('seo/Index', [
            'keywords' => []
        ]);
    }
}
