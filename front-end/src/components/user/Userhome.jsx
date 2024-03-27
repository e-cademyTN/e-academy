import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar.jsx'
import axios from '../../assets/axiosSingleton.js'
import MatDetailJoin from '../admin/MatDetail.jsx'

function Userhome() {
  const [data, setData] = useState([])
  const getMaterials = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/api/material/getAll')
      setData(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMaterials()
  }, [])


  return (
    <div><NavBar />
      <div className='container'  >
        {data.map((mat) => <MatDetailJoin key={mat.id} mat={mat} />)}
      </div>
    </div>
  )
}

export default Userhome