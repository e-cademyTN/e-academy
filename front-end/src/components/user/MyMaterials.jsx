import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar.jsx';
import axios from '../../assets/axiosSingleton.js';
import MatDetailLeave from '../admin/MatDetailLeave.jsx';

function MyMaterials() {
  const [data, setData] = useState([]);

  const getMyMaterials = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const { data } = await axios.get(`http://localhost:3000/api/student/getmaterials/${user.id}`);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyMaterials();
  }, []);

  const delmat = async (material) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const res = await axios.put(`http://localhost:3000/api/student/delmaterialuser`, { userId: user.id, materialId: material.id });
      getMyMaterials()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className='container'>
        {data.map((mat) => (
          
            <MatDetailLeave key={mat.id} material={mat} handledel={delmat} />
         
        ))}
      </div>
    </div>
  );
}

export default MyMaterials;
