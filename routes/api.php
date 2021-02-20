<?php

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

// Authentication API's
Route::post('/login', 'Api\LoginController@login');
Route::post('/logout', 'Api\LoginController@logout');
Route::post('/check-token', 'Api\LoginController@checkToken');

Route::get('/widgets', 'Api\DashboardController@widgets');

//Application Api's
Route::prefix('application')->group(function () {
    Route::post('/submit', 'Api\ApplicationController@store');
    Route::get('/get-applications', 'Api\ApplicationController@index');
    Route::get('/show/{id}', 'Api\ApplicationController@show');
    Route::post('/edit', 'Api\ApplicationController@edit');
    Route::post('/update', 'Api\ApplicationController@update');
    Route::post('/delete', 'Api\ApplicationController@destroy');
});

