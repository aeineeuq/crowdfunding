import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function RegisterForm() {
    const history = useHistory();
    const [userInfo, setUser] = useState({});
    const handleChange = (event) => {
        let { id, value } = event.target;
        setUser((prevProject) => {
            return {
                ...prevProject,
                [id]: value,
            };
        });
    };
    const postData = () => {
        return fetch(`${process.env.REACT_APP_API_URL}users/`,
            {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userInfo),
            }).then(i => i.json());
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        postData()
            .then((response) => {
                console.log('------response from my API --------')
                history.push("/");
            })
    };
    return (
        <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input
                        type="text" 
                        id="username" 
                        onChange={handleChange} />
                    </div>                  
                    <div>
                        <label>Email:</label>
                        <input
                        type="text" 
                        id="email" 
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label >Password:</label>
                        <input
                        type="password" 
                        id="password" 
                        onChange={handleChange} />
                    </div>
                    <button type="submit" onClick={handleSubmit}>Sign Up</button>
                </form>
            </div >
    )
}

export default RegisterForm;