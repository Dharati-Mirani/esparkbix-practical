<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class WorkExperience extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'company', 'designation', 'from', 'to'
    ];

    public function setFromAttribute($value) {
        $this->attributes['from'] = (new Carbon($value))->format('Y-m-d');
    }

    public function setToAttribute($value) {
        $this->attributes['to'] = (new Carbon($value))->format('Y-m-d');
    }
      
}
