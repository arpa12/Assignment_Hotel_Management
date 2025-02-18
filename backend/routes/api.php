<?php

use Illuminate\Http\Request;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HotelController;
use Illuminate\Support\Facades\Route;

// Authentication Routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

// Protected Routes for Hotels
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user-dashboard', [UserController::class, 'index']);
    Route::get('/profile', [UserController::class, 'user']);
    Route::get('/hotels', [HotelController::class, 'index']);
    Route::get('/hotels/{id}', [HotelController::class, 'show']);
});

Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::get('/admin-dashboard', [AdminController::class, 'index']);
    Route::post('/create-hotel', [HotelController::class, 'store']);
    Route::put('/update-hotel/{id}', [HotelController::class, 'update']);
    Route::delete('/delete-hotel/{id}', [HotelController::class, 'destroy']);
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route to refresh the access token
Route::middleware('auth:sanctum')->post('/refresh', [AuthController::class, 'refresh']);
