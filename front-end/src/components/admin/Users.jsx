import React from 'react'
import { NavBar } from './NavBar'
import axios from 'axios'
import { useState,useEffect } from 'react'

function Users() {
 
    const [data, setData] = useState([])
    const getAllUsers = async () => {
        try {
          const token = localStorage.getItem('token');
            const { data } = await axios.get('http://localhost:3000/api/users/getAll',
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            setData(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [])


  return (<div className='admin'>
  <NavBar/>
 
  </div>)

}
export default Users