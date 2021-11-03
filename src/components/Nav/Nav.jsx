import React from 'react';
import { Link, useHistory } from "react-router-dom";
import './Nav.css';

function Nav() {
return (
    <nav>
        <Link to="/">Home</Link>
        </nav>
    );
}
    
export default Nav;