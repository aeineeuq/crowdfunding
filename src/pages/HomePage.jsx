import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const HomePage = () => {
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

    return (
      <div> 
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