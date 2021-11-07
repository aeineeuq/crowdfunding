import React, { useState } from 'react';
import "../../App.css";
import { useHistory } from 'react-router-dom';

const CreateProjectForm = () => {
  const [projectData, setProjectData] = useState({
      title: '',
      description: '',
      location: '',
      goal: '',
      image: '',
      is_open: '',
      date_created: new Date(),
  });

  const [errors, setErrors] = useState([]);
  
  const handleChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

    const checkForErrors = () => {
      setErrors([]);
      if (projectData.title === "") {
        setErrors((prevErrors) => [...prevErrors, "Enter your pet's name or project name"]);
      }
      console.log(errors);


      if (projectData.description === "") {
        setErrors((prevErrors) => [...prevErrors, "Add some extra info"]);
      }
      console.log(errors);


      if (projectData.goal === "") {
        setErrors((prevErrors) => [...prevErrors, "Make it rain",
          ]);
        }
      console.log(errors);


      if (projectData.image === "") {
        setErrors((prevErrors) => [...prevErrors, "Please add an image"]);
        }
        console.log(errors);


      if (projectData.location === "") {
        setErrors((prevErrors) => [...prevErrors, "Enter your postcode"]);
        }
        console.log(errors);        
    };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        checkForErrors();
        if (errors.length > 0) {
          //early return
          return;
        }

        const token = window.localStorage.getItem("token");

// posting to API
        fetch(
          `${process.env.REACT_APP_API_URL}projects/`,
          {
            method: "POST",
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(projectData),
          }
        )
        .then((response) => { 
        return response.json();
      });
    };

    return(
      <div className="cside">
      <h3>Post Your Pawtreon Project!</h3>
      <form>
        <div>
          <label>Project Title: </label>
          <input 
          type="text" 
          id="title" 
          placeholder="Hint: You can use your pet's name" 
          onChange={handleChange} />
        </div>

        <div>
          <label>Project Description: </label>
          <input
          type="text"
          id="description" 
          placeholder="Hint: Tell us about about your project" 
          onChange={handleChange} />
        </div>
        <div>
          <label>Goal: </label>
          <input 
          type="text" 
          id="goal" 
          placeholder="Hint: How many monies" 
          onChange={handleChange} />
        </div>
        <div>
          <label>Image Link: </label>
          <input 
          type="text" 
          id="image" 
          placeholder="Hint: Post a pretty picture" 
          onChange={handleChange} />
        </div>
        <div>
        <label>Post Code: </label>
        <input 
          type="text" 
          id="location" 
          placeholder="Hint: Where are you located" 
          onChange={handleChange} />
        </div>
      
      <button type="submit" onClick={handleSubmit}>
            Submit
      </button>
      </form>
      </div>
    )
  
    }

export default CreateProjectForm;