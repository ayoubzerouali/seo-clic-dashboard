<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KeywordCluster extends Model
{
    /* protected $table = 'keyword_clusters'; */
    protected $fillable = [
        'project_id',
        'label',
        'intent',
    ];
}
