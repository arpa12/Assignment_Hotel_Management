<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    public function index()
    {
        $hotels = Hotel::paginate(8); 
        return response()->json($hotels);
    }

    /**
     * Display the specified hotel.
     */
    public function show($id)
    {
        $hotel = Hotel::find($id);

        if (!$hotel) {
            return response()->json(['error' => 'Hotel not found'], 404);
        }

        return response()->json($hotel);
    }

    /**
     * Store a newly created hotel in the database.
     */
    public function store(Request $request)
    {
        $this->authorize('create', Hotel::class);  // Check if user is authorized to create

        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'location' => 'required|string|max:255',
                'price' => 'required|numeric',
                'rooms_available' => 'required|numeric',
                'image_url' => 'nullable|string'
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        }

        $hotel = Hotel::create($validated);
        return response()->json($hotel, 201)->header('Content-Type', 'application/json');
    }


    /**
     * Update the specified hotel in the database.
     */
    public function update(Request $request, $id)
    {
        $this->authorize('update', Hotel::class);  // Check if user is authorized to update

        // Find hotel by ID or return 404 error if not found
        $hotel = Hotel::find($id);
        if (!$hotel) {
            return response()->json(['error' => 'Hotel not found'], 404);
        }

        // Validate the incoming request data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'price' => 'required|numeric',
            'rooms_available' => 'required|numeric',
            'image_url' => 'nullable|string'
        ]);

        // Update the hotel record and return the response
        $hotel->update($validated);
        return response()->json($hotel);
    }

    /**
     * Remove the specified hotel from the database.
     */
    public function destroy($id)
    {
        $this->authorize('delete', Hotel::class);  
        $hotel = Hotel::findOrFail($id);
        $hotel->delete();
        return response()->json(['message' => 'Hotel deleted successfully'], 200);
    }
}
