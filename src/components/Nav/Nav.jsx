// These are our NPM modules from https://npmjs.com/
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Nav.css';

const Nav = () => {
  const history = useHistory();
  const token = window.localStorage.getItem('token')
  function handleClick(e) {
    e.preventDefault();
}

  return (

    <nav>
          <li className="dropdown">
                    <a href="#" onClick={handleClick} className="drop">Explore</a>
                    <div className="dropdown-menu">
                    <Link to="/Register">Create Account</Link>               
                    <Link to="/createproject">Create Project</Link>                       
                    </div>
            </li>
            <li> <h1><Link to="/">Pawtreon</Link></h1></li>
           { 
        token
          ?<><button className="loginout" onClick={() => window.localStorage.clear()}>
              Log Out
            </button>
            </>
          : (
            <li>
            <Link className="loginout" to="/login"> Login </Link>
            </li>
          )
      }
    </nav>
  )
}

export default Nav
