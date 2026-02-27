<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    /** @use HasFactory<\Database\Factories\ApplicationFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'location',
        'phone',
        'program',
        'tech_level',
        'reason_for_applying',
        'has_laptop',
        'can_commit',
        'tuition_ready',
        'referral_source',
        'status',
    ];
}
