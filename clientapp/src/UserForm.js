import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://localhost:7040/api/users";

const UserForm = ({ refreshUsers }) => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phoneNumber: "",
        skillsets: "",
        hobbies: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedUser = {
            ...user,
            skillsets: user.skillsets.split(",").map((s) => s.trim()),
            hobbies: user.hobbies.split(",").map((h) => h.trim()),
        };

        console.log("Submitting User:", formattedUser);

        try {
            await axios.post(API_BASE_URL, formattedUser);
            setUser({ username: "", email: "", phoneNumber: "", skillsets: "", hobbies: "" }); // Reset form
            refreshUsers(); // Refresh user list after adding
        } catch (error) {
            console.error("Failed to add user:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-3 border rounded">
            <h3>Add New User</h3>
            <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} className="form-control mb-2" required />
            <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} className="form-control mb-2" required />
            <input type="text" name="phoneNumber" placeholder="Phone Number" value={user.phoneNumber} onChange={handleChange} className="form-control mb-2" required />
            <input type="text" name="skillsets" placeholder="Skillsets (comma separated)" value={user.skillsets} onChange={handleChange} className="form-control mb-2" required />
            <input type="text" name="hobbies" placeholder="Hobbies (comma separated)" value={user.hobbies} onChange={handleChange} className="form-control mb-2" required />
            <button type="submit" className="btn btn-primary">Add User</button>
        </form>
    );
};

export default UserForm;
