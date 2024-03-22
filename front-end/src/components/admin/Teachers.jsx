import React from 'react'
import { NavBar } from './NavBar'
import './index.css'
import axios from 'axios'
import { useState,useEffect } from 'react'
function Teachers() {
    const [data, setData] = useState([])
    const getAllTeachers = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/api/teacher/getAll')
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllTeachers()
    }, [])
  return (<div className='div'>
  <NavBar/>
  <div className='teacherCon'>
  <div className="card">
  <div className="card-border-top">
  </div>
  <div className="img">
  </div>
  <span> Person</span>
  <p className="job"> Job Title</p>
  <button> Click
  </button>
</div>
</div>
</div>
 )
}

export default Teachers