import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateProjectForm = () => {
    const history = useHistory();
    const [projectInfo, setProjectInfo] = useState({
        title: '',
        description: '',
        location: '',
        goal: '',
        image: '',
        is_open: '',
        date_created: new Date()
      });
      const handleChange = (event) => {
        const { id, value } = event.target;
        setProjectInfo((prevProject) => {
          return {
            ...prevProject,
            [id]: value,
          };
        });
      };
      const postData = async () => {
        const token = window.localStorage.getItem('token');
        const response = await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
          method: 'post',
          headers: {
            "Authorization": `Token ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            projectInfo
          ),
        });
        return response.json();
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        if (window.localStorage.getItem('token')) {
        postData().then((response) => {
          window.localStorage.setItem('token', response.token);
          history.push('/');
        });
        }
      };
      return (
          <div id="project-form-container" className="form-container">
            <form id="project-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor='title'>Project Title:</label>
                <input
                type='text'
                id='title'
                onChange={handleChange}
                />
            </div>
            <div id="description">
                <label htmlFor='description'>Project Description:</label>
                <textarea
                id='description'
                onChange={handleChange}
                />
            </div>
            <div id="location">
                <label htmlFor='location'>Location:</label>
                <input
                id='location'
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='goal'>Goal:</label>
                <input
                type='text'
                id='goal'
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='image'>Image URL:</label>
                <input
                type='text'
                id='image'
                onChange={handleChange}
                />
            </div>
            {/* <div>
                <label htmlFor='is_open'>Is this project active? (true or false)</label>
                <input
                type='text'
                id='is_open'
                onChange={handleChange}
                />
            </div> */}

            <button className="submit-button"type='submit'>Submit New Project</button>
            </form>
        </div>
      );
    };

export default CreateProjectForm