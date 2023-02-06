import React, { useState, useEffect } from 'react'

import axios from "axios";

const Profile = () => {
    const [userId, setUser] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/users/${userId}`);
                setUser(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [userId]);

    return (
        <div>
            <p>{userId.username}</p>
            <p>Email: {userId.email}</p>
            <h3>Interests:</h3>
            <ul>
                <li>Reading</li>
                <li>Hiking</li>
                <li>Programming</li>
            </ul>
        </div>
    )
}

export default Profile
