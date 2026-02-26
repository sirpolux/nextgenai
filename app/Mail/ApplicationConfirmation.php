<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ApplicationConfirmation extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public function __construct(public $application)
    {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Application Received – NextGen Starters',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.application_confirmation',
            with: [
                'application' => $this->application,
            ],
        );
    }


    public function attachments(): array
    {
        return [];
    }
}