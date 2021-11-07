// These are our NPM modules from https://npmjs.com/
import React, {useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Nav.css';

const Nav = () => {
const token = window.localStorage.getItem('token')
// const history = useHistory();
const [userToken, setUserToken ] = useState(token)

const handleLogOut = () => {
  console.log('Logging out')
  window.localStorage.removeItem('token')
  setUserToken(null)
  console.log('token is: ', window.localStorage.getItem('token'))
}

function handleClick(e) {
    e.preventDefault();
}

  return (

    <nav>
          {/* <li className="dropdown">
                    <a href="#" onClick={handleClick} className="drop">Explore</a>
                    <div className="dropdown-menu">
                    <Link to="/Register">Create Account</Link>               
                    <Link to="/createproject">Create Project</Link>                       
                    </div>
            </li> */}
            <li> <h1><Link to="/">Pawtreon</Link></h1></li>
           { 
        token
          ?<><button className="loginout" onClick={handleLogOut}>
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
// logging in goes to homepage, next release for login direct to users own page
// login is a link which looks like a button, next release for actual login button