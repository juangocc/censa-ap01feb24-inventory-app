<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'login')->name('login');
Route::post('/auth/login', [\App\Http\Controllers\Auth\Login::class, 'login'])
    ->name('auth.login');