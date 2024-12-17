// src/services/UserService.js
import axios from "axios";

const API_URL = "http://localhost:5001/api/users"; // Replace with your backend endpoint

const UserService = {
    getAllUsers: async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data; // Assume backend returns an array of users
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    },
};

export default UserService;
