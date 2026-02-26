<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Http;

class PushApplicatioToGoogleSheet implements ShouldQueue
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
          Http::timeout(10) // never wait 30s
            ->retry(3, 2000) // retry 3 times, 2s delay
            ->post(env('GOOGLE_SHEET_WEBHOOK'), $this->application->toArray());
    }
}
