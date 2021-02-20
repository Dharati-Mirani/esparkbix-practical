<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\WorkExperience;

class Application extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'address', 'contact', 'board', 'year', 'percentage', 'work_experience', 'gender', 'language', 'technical_experience', 'location', 'cctc', 'ectc', 'notice_period'
    ];

    /**
     * Get the work experiences for the application.
     */
    public function workExperiences()
    {
        return $this->hasMany(WorkExperience::class);
    }
}
