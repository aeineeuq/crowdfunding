import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PledgeButton from '../components/PledgeButton';
import "../App.css";

function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges: [] });
    const history = useHistory();
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`).then((results) => {
        return results.json();
    }).then((data) => {
        setProjectData(data)
        });
    }, []);

    return (
        <div>
        <div id="projectcard">
            <div className="aside">
                <img src={projectData.image} alt=""/>
                <PledgeButton />
            </div>
        
        <div className="bside">
            <h2>{projectData.title}</h2>
            <h3>Created at: {projectData.date_created}</h3>
            <h3>Created by: {projectData.owner} </h3>
            <h3>{`Status: ${projectData.is_open}`}</h3>
            <p>{projectData.description}</p>

        </div></div>
        <div>
        <div className="cside">
                    <h3>Suppawters:</h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) =>{
                    return (
                    <li>
                $ {pledgeData.amount} from {pledgeData.supporter} and says {pledgeData.comment}
                    </li>
                    );
                })}
                <PledgeButton /></ul>
        </div></div>
        </div>
        );
    }    

    export default ProjectPage;