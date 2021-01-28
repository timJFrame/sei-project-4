import React from 'react'
import { Link } from 'react-router-dom'

function Nav(){
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <Link to="/">
          <button className="button button-clear">Vine(replace with logo)</button>
        </Link>
      </div>
      <div className="nav-links-container">
        <Link to="/feed">
          <button className="button button-clear">Feed</button>
        </Link>
        <Link to="/profile">
          <button className="button button-clear">Profile</button>
        </Link>
        <Link to="/register">
          <button className="button button-clear">Register</button>
        </Link>
        <Link to="/login">
          <button className="button button-clear nav-button">Login</button>
        </Link>
      </div>
    </nav>
  
  )
}

export default Nav