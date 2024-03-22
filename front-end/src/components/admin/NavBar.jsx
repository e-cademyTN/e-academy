import React from 'react';
import './admin.css'; // 
import { useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li onClick={navigate('/adminHome')}>e-school</li>
        <li >Classes</li>
      </ul>
      <div className="profile">
        <img src="/path/to/profile-icon.png" alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
