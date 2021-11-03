import React, { useState, useEffect, Components } from 'react';
import { useParams, Link } from "react-router-dom";

function UserPage() {
    const [userData, setUserData] = useState({ users: [] });
    const { id } = useParams();

    useEffect(() => {

        fetch(`${process.env.REACT_APP_API_URL}users/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserData(data);
        });
    }, [id]);

    window.localStorage.setItem("ownerUserName", userData.username);

    return (
        <div>
            <img src={ userData.image } alt="" />
            <h2>{ userData.username} </h2>

            <p>See Projects for <Link to={`/projectsby/${userData.username}`}>{ userData.username }</Link></p>
            <p>See Pledges by <Link to={`/pledgesby/${userData.username}`}>{ userData.username }</Link></p>

        </div>
    );
}

export default UserPage;
