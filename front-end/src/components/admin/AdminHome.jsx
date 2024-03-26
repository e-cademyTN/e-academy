import React from 'react';
import NavBar from '../NavBar';
import img from '../img/undraw_engineering_team_a7n2 (1).svg';
import "../admin/homeCss.css";
import { useNavigate } from 'react-router-dom';

function AdminHome() {
  const navigate = useNavigate()
  return (
    <div className='admin-container'>
      <NavBar />
      <div className='container-2'>
        <div className='content'>
          <h1 className='title'>Welcome</h1>


        <ul>
          <li>

        <p className='paragraph'>Student Information Management:
The system maintains a centralized database containing detailed
 profiles of students, including personal information, contact details,
  academic records, attendance, and disciplinary history.</p>
          </li>
        </ul>
          
          <img className='image' src={img} alt="Engineering Team" />
        <button
        className='bttn'
        onClick={()=>{
            navigate("/materials")
        }}
        >get Start</button>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
