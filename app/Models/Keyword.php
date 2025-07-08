<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class Keyword extends Model
{
    use HasFactory;
    public $incrementing = false;
    protected $keyType = 'string';

    protected static function booted()
    {
        static::creating(function ($model) {
            if (! $model->id) {
                $model->id = (string) Str::uuid();
            }
        });
    }
    protected $fillable = [
        'project_id',
        'keyword',
        'volume',
        'difficulty',
        'position',
        'url',
        'trend_delta',
        'intent',
        'cluster_id'
    ];
}
