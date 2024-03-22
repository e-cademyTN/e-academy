import React from 'react'
 import { useNavigate } from 'react-router-dom';
import  './navBar.css'

export const NavBar = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                Your Logo
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <a onClick={()=>{navigate('/myMatiriels')}} className="navbar-item">
                  My Matiriels
                </a>
                <a className="navbar-item" 
                onClick={()=>{navigate('/editProfile')}}
                >
                  Edit Profile
                </a>
                <a className="navbar-item">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      );
}
