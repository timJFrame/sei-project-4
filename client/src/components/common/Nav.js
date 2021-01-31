import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import {  logout, isAuthenticated } from '../../lib/auth'

function Nav(){

  const isLoggedIn = isAuthenticated()
  const history = useHistory()

  useLocation()

  const handleLogout = () => {
    logout()
    history.push('/')
    
  }


  return (
    <nav className="nav-container">
      <div className="logo-container">
        <Link to="/">
          <button className="button button-clear">Vine(replace with logo)</button>
        </Link>
      </div>
      <div className="nav-links-container">
        {isLoggedIn &&
         <>
           <Link to="/feed">
             <button className="button button-clear">Feed</button>
           </Link>

           <Link to="/profile">
             <button className="button button-clear">Profile</button>
           </Link>
         </>
        }
        {
          !isLoggedIn ?
            <>
              <Link to="/register">
                <button className="button button-clear">Register</button>
              </Link>

              <Link to="/login">
                <button className="button button-clear nav-button">Login</button>
              </Link>
            </>
            :
            <>
              <button className="button button-clear nav-button" onClick={handleLogout}>Logout</button>
            </>
        }
      </div>
    </nav>
  
  )
}

export default Nav