// src/components/UserList.js
import React, { useState, useEffect } from "react";
import UserService from "../services/UserService";
import "bootstrap/dist/css/bootstrap.min.css";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        // Fetch users when the component mounts
        UserService.getAllUsers()
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to load users.");
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">User Management</h2>
            {loading && <p>Loading users...</p>}
            {error && <p className="text-danger">{error}</p>}

            {!loading && !error && (
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Date of Birth</th>
                        <th>Status</th>
                        <th>Preferences</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id || index}>
                            <td>{index + 1}</td>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                {user.address.street}, {user.address.city}, {user.address.state}, {user.address.zipcode}
                            </td>
                            <td>{new Date(user.dateOfBirth).toLocaleDateString()}</td>
                            <td>{user.isActive ? "Active" : "Inactive"}</td>
                            <td>
                                Newsletter: {user.preferences.newsletter ? "Yes" : "No"}<br />
                                Theme: {user.preferences.theme}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UserList;
