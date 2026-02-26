<?php

namespace App\Http\Controllers;

use App\Models\Application;
use App\Http\Requests\StoreApplicationRequest;
use App\Http\Requests\UpdateApplicationRequest;
use App\Jobs\PushApplicatioToGoogleSheet;
use App\Jobs\SendApplicationEmails;

class ApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreApplicationRequest $request)
    {
       // dd($request->all());
        $application = Application::create($request->all());
        // Mail::to($request->email)->queue(new ApplicationComfirmation($application));
       // Mail::to($request->email)->queue(new ApplicationComfirmation($application));
       
        // Mail::to('nextgenstartersltd@gmail.com')->queue(new AdminApplicationNotification($application));
        //send to google sheet
        PushApplicatioToGoogleSheet::dispatch($application);
        SendApplicationEmails::dispatch($application);
        return back()->with('success', 'Application submitted successfully');

    }

    /**
     * Display the specified resource.
     */
    public function show(Application $application)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Application $application)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateApplicationRequest $request, Application $application)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Application $application)
    {
        //
    }
}
