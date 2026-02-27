<?php

use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
// use Swift_TransportException;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/programs/beginner', function () {
    return Inertia::render('Programs/BeginnerProgram');
})->name('programs.beginner');

Route::get('/programs/automation', function () {
    return Inertia::render('Programs/AutomationProgram');
})->name('programs.automation'); 


Route::get('/curriculum/beginner', function () {
    return Inertia::render('Curriculum/BeginnerCurriculum');
})->name('curriculum.beginner');

Route::get('/curriculum/automation', function () {
    return Inertia::render('Curriculum/AutomationCurriculum');
})->name('curriculum.automation');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/about', function(){
    return Inertia::render('About/About');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/program/apply', function () {
    return Inertia::render('Registration/Apply');
})->name('apply');

Route::get('/application/success', function () {
    return Inertia::render('Registration/Success');
})->name('application.success');


Route::get('/test-mail', function () {
    try {
        Mail::raw('This is a test email from Laravel.', function ($message) {
            $message->to('paulm@fundtroncapital.com')
                    ->subject('Test Mail');
        });

        return response()->json([
            'status' => 'success',
            'message' => 'Mail sent attempt completed. Check inbox or spam.'
        ]);
    } catch (TransportExceptionInterface $e) {
        return response()->json([
            'status' => 'error',
            'type' => 'SMTP Transport Error',
            'message' => $e->getMessage()
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'status' => 'error',
            'type' => 'General Error',
            'message' => $e->getMessage()
        ]);
    }
});

Route::resource('application', ApplicationController::class);
//Route::post('/program/apply',[ApplicationController::class, 'store'])->name('application.store');

require __DIR__.'/auth.php';
