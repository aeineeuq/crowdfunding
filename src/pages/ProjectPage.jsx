import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PledgeButton from '../components/PledgeButton';
import "../App.css";

function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`).then((results) => {
        return results.json();
    }).then((data) => {
        setProjectData(data)
        });
    }, []);

    return (
        <div id="projectcard">
            <div class="aside">
                <img src={projectData.image} />
                <PledgeButton />
            </div>
        <div>
        <div class="bside">
            <h2>{projectData.title}</h2>
            <h3>Created at: {projectData.date_created}</h3>
            <h3>Created by: {projectData.owner} </h3>
            <h3>{`Status: ${projectData.is_open}`}</h3>
            <p>{projectData.description}</p>
                    <h3>Pledges:</h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) =>{
                    return (
                    <li>
                $ {pledgeData.amount} from {pledgeData.supporter} and says {pledgeData.comment}
                    </li>
                    );
                })}
                </ul>
        </div>
        </div>
        </div>

        );
    }    

    export default ProjectPage;