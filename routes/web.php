<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/








Route::get('home/{pi?}', 'ViewController@react')->where("pi", ".*");
Route::get('/auth/{pi?}', 'ViewController@auth_react')->where("pi", ".*")->middleware('auth:sanctum');

//login
Route::view('/login', 'mainPage')->name('login');
Route::view('/register', 'auth/react')->name('register')->middleware('auth:sanctum');


Route::get('/', function() {

    if (Auth::check()) {
        return view('authReact');
    } else {
        return view('mainPage');
    }

});

