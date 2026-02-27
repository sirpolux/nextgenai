<?php

namespace App\Jobs;

use App\Mail\AdminApplicationNotification;
use App\Mail\ApplicationConfirmation;
// use App\Mail\ApplicationConfirmation;
// use App\Mail\ApplicationConfirmation;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Mail;

class SendApplicationEmails implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(public $application)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        //
    Mail::to($this->application->email)
        ->send(new ApplicationConfirmation($this->application));

        //nextgenstartersltd@gmail.com
    Mail::to('nextgenstartersltd@gmail.com')
        ->send(new AdminApplicationNotification($this->application));
    }
}
