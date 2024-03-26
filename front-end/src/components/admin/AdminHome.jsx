import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar';
import img from '../img/undraw_engineering_team_a7n2 (1).svg';
import "../admin/homeCss.css";
import { useNavigate } from 'react-router-dom';
import axios from '../../assets/axiosSingleton.js';

function AdminHome() {
  const navigate = useNavigate();
  const [studentCount, setStudentCount] = useState(0);
  const [materialCount, setMaterialCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [studentResponse, materialResponse] = await Promise.all([
          axios.get('http://localhost:3000/api/users/getAll'),
          axios.get('http://localhost:3000/api/material/getAll')
        ]);

       
        const studentCount = studentResponse.data.length;
        const materialCount = materialResponse.data.length;

        setStudentCount(studentCount);
        setMaterialCount(materialCount);
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='admin-container'>
      <NavBar />
      <div className='container-2'>
        <div className='content'>
          <h1 className='title'>Welcome</h1>
          <ul>
            <li>
              <p className='paragraph'>Student Information Management: The system maintains a centralized database containing detailed profiles of students, including personal information, contact details, academic records, attendance, and disciplinary history.</p>
            </li>
          </ul>
          <div className='totalCounts'>
            <p>Total Students: <span>{studentCount}</span></p>
            <p>Total Materials: <span>{materialCount}</span></p>
          </div>
          <img className='image' src={img} alt="Engineering Team" />
          <button
            className='bttn'
            onClick={() => {
              navigate("/materials");
            }}
          >Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
