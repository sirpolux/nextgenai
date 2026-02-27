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
        
        //check if active application exists for the email
        $activeApplication = Application::where('email', $request->email)->where('status', 'Pending')->first();
        if($activeApplication){
            return redirect()->route('application.success')->with('success', 'Application submitted successfully');
        }
        $application = Application::create($request->all());
        PushApplicatioToGoogleSheet::dispatch($application);
        SendApplicationEmails::dispatch($application);
        return redirect()->route('application.success')->with('success', 'Application submitted successfully'); 

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
