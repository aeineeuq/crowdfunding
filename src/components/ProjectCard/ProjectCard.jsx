import React, {useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div className="project-card">
        <Link to={`/project/${projectData.id}`}>
        <li><img src={projectData.image} alt=""/></li>
        <li>{projectData.title}</li>
        </Link>
        </div>
    );
}

export default ProjectCard;