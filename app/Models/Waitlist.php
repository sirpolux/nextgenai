<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Waitlist extends Model
{
    /** @use HasFactory<\Database\Factories\WaitlistFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'program',
        'experience_level',
        'message'
    ];
}
