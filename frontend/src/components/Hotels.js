import React, { useState, useEffect } from "react";
import axios from "axios";
import HotelForm from "./Dashboard";
import "../assests/css/hotels.css";

export default function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [editingHotel, setEditingHotel] = useState(null);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      let tokens = localStorage.getItem("token");
      let headers = {
        Authorization: `Bearer ${tokens}`,
      }
      const response = await axios.get("http://localhost:8000/api/hotels", { headers });
      setHotels(response.data.data);
    } catch (error) {
      alert("Error fetching hotels.");
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!window.confirm("Are you sure you want to delete this hotel?")) return;

    try {
      let response = await axios.delete(`http://localhost:8000/api/delete-hotel/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status !== 200) {
        throw new Error("Error deleting hotel.");
      }

      alert("Hotel deleted successfully!");
      fetchHotels(); // Refresh list
    } catch (error) {
      alert("Error deleting hotel.");
    }
  };

  return (
    <div className="hotel-management-container">
      <h1>Hotel Management</h1>
      <HotelForm
        hotel={editingHotel}
        onSuccess={() => {
          fetchHotels();
          setEditingHotel(null);
        }}
      />
      <table className="hotel-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Price</th>
            <th>Rooms Available</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel.id}>
              <td>{hotel.name}</td>
              <td>{hotel.location}</td>
              <td>${hotel.price}</td>
              <td>{hotel.rooms_available}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => setEditingHotel(hotel)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(hotel.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
