import React from 'react'
 import { useNavigate } from 'react-router-dom';
import  './navBar.css'

export const NavBar = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar">
          <div className="container">
            <div className="navbar-menu">
              <div className="navbar-end">
                <a onClick={()=>{navigate('/teachers')}} className="navbar-item">
                  teachers
                </a>
                <a className="navbar-item"onClick={()=>{navigate('/materials')}}>
                materials
              </a>
                <a className="navbar-item" 
                onClick={()=>{navigate('/users')}}
                >
                  users
                </a>
                <a className="navbar-item"  onClick={()=>{navigate('/editProfile')}}>
                Edit Profile
                </a>
              </div>
            </div>
          </div>
        </nav>
      );
}
