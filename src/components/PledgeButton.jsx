import React from "react";
import { Link } from "react-router-dom";

function PledgeButton() {
    return (
        <div>
        <Link to="/PostPledge/:id">
        <button>Pledge to this Project!</button>
        </Link>
        </div>
    )
}

export default PledgeButton;

