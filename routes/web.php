<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'home')->name('home');
Route::inertia('/login', 'login')->name('login');
Route::inertia('/register', 'register')->name('register');