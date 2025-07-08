<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Keyword>
 */
class KeywordFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $intents = ['informational', 'commercial', 'navigational', 'transactional'];
        $keywords = ['seo dashboard tool', 'research software', 'seo audit'];
        return [
            'intent' => $intents[rand(0, count($intents) - 1)],
            'keyword' => $keywords[rand(0, count($keywords) - 1)],
            'trend_delta' => rand(-10, 10),
            'volume' => rand(1000, 20000),
            'difficulty' => rand(1, 100),
            'position' => rand(1, 10),
            'url' => 'https://www.google.com/search?q=' . $keywords[rand(0, count($keywords) - 1)]
        ];
    }
}
