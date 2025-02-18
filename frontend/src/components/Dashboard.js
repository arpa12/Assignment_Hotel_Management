import React, { useState, useEffect } from "react";
import { createHotel, updateHotel } from "../api"; // Import API functions
import "../assests/css/dashboard.css";

export default function HotelForm({ hotel, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    rooms_available: "",
    image_url: "",
  });

  useEffect(() => {
    if (hotel) {
      setFormData(hotel); // Populate form data if hotel is passed
    }
  }, [hotel]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      if (hotel) {
        // Update existing hotel
        await updateHotel(token, hotel.id, formData);
        alert("Hotel updated successfully!");
      } else {
        // Create new hotel
        await createHotel(token, formData);
        alert("Hotel added successfully!");
      }

      onSuccess(); // Refresh the hotel list
    } catch (error) {
      alert("Error saving hotel.");
    }
  };

  return (
    <div className="hotel-form-container">
      <form onSubmit={handleSubmit} className="hotel-form">
        <h2>{hotel ? "Edit Hotel" : "Add New Hotel"}</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="rooms_available"
          placeholder="Rooms Available"
          value={formData.rooms_available}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image_url"
          placeholder="Image URL"
          value={formData.image_url}
          onChange={handleChange}
        />
        <button type="submit">{hotel ? "Update" : "Add"} Hotel</button>
      </form>
    </div>

  );
}
