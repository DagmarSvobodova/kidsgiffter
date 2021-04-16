<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//users

Route::middleware('auth:api')->post('/user', function (Request $request) {
    return $request->user();
}); 

Route::post('/token', 'Api\UserController@token');                                          
Route::get('/user', 'Api\UserController@user')->middleware('auth:sanctum');                                                
Route::post('/logout', 'Api\UserController@logout')->middleware('auth:sanctum');

//children
Route::post('/child/create', 'Api\ChildController@create'); //->middleware('auth:sanctum');
Route::get('/waiting/{child_id}', 'Api\ChildController@waiting'); 
Route::get('/delete_wish/{child_id}', 'Api\ChildController@delete_wish')->middleware('auth:sanctum'); 
Route::get('/delete_waiter/{child_id}', 'Api\ChildController@delete_waiter')->middleware('auth:sanctum'); 
Route::get('/child/{child_id}', 'Api\ChildController@child'); 
Route::get('/children', 'Api\ChildController@children'); 


//waiter
Route::get('/waiter/{child_id}', 'Api\WaiterController@waiter')->middleware('auth:sanctum');
Route::get('/waiters', 'Api\WaiterController@waiters')->middleware('auth:sanctum'); 

//giffter
Route::post('/giffter/{child_id}', 'Api\GiffterController@create_giffter'); 
