import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import "../App.css";

function HomePage() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
            .then((results) => {
                return results.json();
        })
             .then((data) => {
                  setProjectList(data);
        });
    }, []);

    const token = window.localStorage.getItem('token')
    return (
      <div>
        {
          token ? (
            <div> 
              
              {/* <form onSubmit={createProject}>
                <div>
                  <label htmlFor="username">Enter Project Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </form> */}
            </div>
          ) : null
        }
  
        {/* mapping over our projectList from state */}
        <div id="project-list">
          {projectList.map((project, key) => {
            return (
              <div key={key}>
                <ProjectCard projectData={project}/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

export default HomePage;