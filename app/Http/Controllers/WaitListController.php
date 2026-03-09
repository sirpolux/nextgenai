<?php

namespace App\Http\Controllers;

use App\Mail\WaitListConfirmation;
use App\Models\Waitlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class WaitListController extends Controller
{
    //
    public function create()
    {
        return inertia('Cohort/WaitlistForm');
    }

    public function store(Request $request)
    {
        //
        $request->validate([
            'email' => ['required', 'email', 'unique:users'],
            'name' => ['required', 'string', 'max:255'],
            'phone' => ['nullable', 'string', 'max:20'],
            'program' => ['required', 'string', 'max:255'],
            'experience_level' => ['required', 'string', 'max:255'],
            'message' => ['nullable', 'string'],
        ]);

        $waitlist = Waitlist::create($request->all());
        Mail::to($waitlist->email)->send(new WaitListConfirmation($waitlist));
        return redirect()->route('waitlist.success');

    }

    public function success()
    {
        return inertia('Cohort/WaitlistSuccess');
    }
}
