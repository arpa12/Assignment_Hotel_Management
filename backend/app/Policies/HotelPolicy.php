<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Hotel;

class HotelPolicy
{
    public function view(User $user, Hotel $hotel)
    {
        // Logic for determining if the user can view the hotel
        return $user->id === $hotel->user_id; 
    }

    public function create(User $user)
    {
        // creating a hotel
        return $user->role === 'admin';
    }

    public function update(User $user)
    {
        // updating a hotel
        return $user->role === 'admin';
    }

    public function delete(User $user)
    {
        // deleting a hotel
        return $user->role === 'admin';
    }
}

