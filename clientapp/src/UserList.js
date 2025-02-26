import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://localhost:7040/api/users";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null); // Store the user being edited
    const [editForm, setEditForm] = useState({
        id: "",
        username: "",
        email: "",
        phoneNumber: "",
        skillsets: [""],
        hobbies: [""]
    });

    // Fetch users
    const fetchUsers = async () => {
        try {
            const response = await axios.get(API_BASE_URL);
            setUsers(response.data);
        } catch (error) {
            console.error("Failed to fetch users:", error);
        }
    };

    // Delete user
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}/${id}`);
            fetchUsers(); // Refresh after delete
        } catch (error) {
            console.error("Failed to delete user:", error);
        }
    };

    // Handle "Edit" button click
    const handleEdit = (user) => {
        setEditingUser(user.id);
        setEditForm({
            id: user.id,
            username: user.username,
            email: user.email,
            phoneNumber: user.phoneNumber,
            skillsets: user.skillsets || [""],
            hobbies: user.hobbies || [""]
        });
    };

    // Handle input change in edit form
    const handleEditChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value });
    };

    // Handle form submission for updating
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${API_BASE_URL}/${editForm.id}`, editForm);
            setEditingUser(null);
            fetchUsers(); // Refresh list after update
        } catch (error) {
            console.error("Failed to update user:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="mt-3">
            <h3>Registered Users</h3>
            <ul className="list-group">
                {users.map((user) => (
                    <li key={user.id} className="list-group-item">
                        <strong>{user.username}</strong> <br />
                        Email: {user.email} <br />
                        Phone: {user.phoneNumber} <br />
                        Skillsets: {user.skillsets?.join(", ") || "None"} <br />
                        Hobbies: {user.hobbies?.join(", ") || "None"} <br />
                        <button onClick={() => handleEdit(user)} className="btn btn-warning mt-2 me-2">
                            Edit
                        </button>
                        <button onClick={() => handleDelete(user.id)} className="btn btn-danger mt-2">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            {/* Show edit form when editingUser is set */}
            {editingUser && (
                <form onSubmit={handleUpdate} className="p-3 border rounded mt-3">
                    <h3>Edit User</h3>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={editForm.username}
                        onChange={handleEditChange}
                        className="form-control mb-2"
                        required
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={editForm.email}
                        onChange={handleEditChange}
                        className="form-control mb-2"
                        required
                    />
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={editForm.phoneNumber}
                        onChange={handleEditChange}
                        className="form-control mb-2"
                        required
                    />

                    {/* Skillsets */}
                    <label>Skillsets:</label>
                    <input
                        type="text"
                        name="skillsets"
                        placeholder="Skillsets (comma separated)"
                        value={editForm.skillsets.join(", ")}
                        onChange={(e) => setEditForm({ ...editForm, skillsets: e.target.value.split(",").map(s => s.trim()) })}
                        className="form-control mb-2"
                    />

                    {/* Hobbies */}
                    <label>Hobbies:</label>
                    <input
                        type="text"
                        name="hobbies"
                        placeholder="Hobbies (comma separated)"
                        value={editForm.hobbies.join(", ")}
                        onChange={(e) => setEditForm({ ...editForm, hobbies: e.target.value.split(",").map(h => h.trim()) })}
                        className="form-control mb-2"
                    />

                    <button type="submit" className="btn btn-success">
                        Update
                    </button>
                    <button type="button" className="btn btn-secondary ms-2" onClick={() => setEditingUser(null)}>
                        Cancel
                    </button>
                </form>
            )}
        </div>
    );
};

export default UserList;
