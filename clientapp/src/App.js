import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./UserForm";
import UserList from "./UserList";

const API_BASE_URL = "https://localhost:7040/api/users";

function App() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(API_BASE_URL);
            setUsers(response.data);
        } catch (error) {
            console.error("Failed to fetch users:", error);
        }
    };

    useEffect(() => {
        fetchUsers(); // Load users on page load
    }, []);

    return (
        <div className="container mt-5">
            <h1>CDN Freelancer Directory</h1>
            <UserForm refreshUsers={fetchUsers} />
            <UserList users={users} refreshUsers={fetchUsers} />
        </div>
    );
}

export default App;
