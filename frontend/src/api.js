import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

// Registration and Login
export const register = (data) => axios.post(`${API_URL}/register`, data);
export const login = (data) => axios.post(`${API_URL}/login`, data);

// Get Hotels (GET)
export const getHotels = (token) =>
  axios.get(`${API_URL}/hotels`, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Create Hotel (POST)
export const createHotel = (token, data) =>
  axios.post(`${API_URL}/create-hotel`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Update Hotel (PUT)
export const updateHotel = (token, id, data) =>
  axios.put(`${API_URL}/update-hotel/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Delete Hotel (DELETE)
export const deleteHotel = (token, id) =>
  axios.delete(`${API_URL}/delete-hotel/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
