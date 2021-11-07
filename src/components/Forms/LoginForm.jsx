import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../App.css";

const LoginForm = () => {
   const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({ 
    ...prevCredentials, 
    [id]: value,
    }));
  };

    const postData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}api-token-auth/`,
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }
    );
    return response.json()
  };

  const handleSubmit = (e) => {
    console.log("log in, in progress")
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        console.log(window.location)
        window.location=`${window.location.origin}/`
        history.push("/");
        console.log(response);
        console.log(window.location)
        window.location = `${window.location.origin}/`
      });
    }
  };

  return (
    <div className="cside">
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Ready to make a pawsitive change? Sign-in below</h2>
        <label>Username: </label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <button type="submit">
        Login
      </button>
    </form></div>
  )
} 
export default LoginForm