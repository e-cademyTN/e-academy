import React, { useState , useEffect} from 'react'
import MatDetail from '../admin/MatDetail.jsx'
import Navbar from '../NavBar.jsx'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from '../../assets/axiosSingleton.js'


const UserMaterials = ({user}) => {

    const {state} = useLocation()
   
const [data,setData] = useState ([])

const getMaterialsUser = async () => {

    try {
        const user=JSON.parse(localStorage.getItem("user"))
        const { data } = await axios.get(`http://localhost:3000/api/student/getmaterials/${user.id}`)
        setData(data)
    } catch (error) {
        console.log(error)
    }
}
useEffect(() => {
    getMaterialsUser()
}, [])

  return (
    <div>
        <Navbar/>
        <div className='container'  >
    {data.map((mat) => <MatDetail key={mat.id} mat={mat} />)}
   </div>
    
    </div>
  )
}

export default UserMaterials
