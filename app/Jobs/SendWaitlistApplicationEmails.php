<?php

namespace App\Jobs;

use App\Mail\WaitlistAdminNotification;
use App\Mail\WaitListConfirmation;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Mail;

class SendWaitlistApplicationEmails implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(public $waitlist)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        //
        Mail::to($this->waitlist->email)->send(new WaitlistAdminNotification($this->waitlist));
        Mail::to($this->waitlist->email)->send(new WaitListConfirmation($this->waitlist));
    }
}
