import React, { useState , useEffect} from 'react'
import MatDetail from '../admin/MatDetail.jsx'
import Navbar from '../NavBar.jsx'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from '../../assets/axiosSingleton.js'


const UserMat = () => {

const {state} = useLocation()
const [data,setData] = useState ([])
const getMaterialsUser = async () => {
    try {
        
        const { data } = await axios.get(`http://localhost:3000/api/student/getmaterials/${state.id}`)
        setData(data);
    } catch (error) {
        console.log(error)
    }
}
useEffect(() => {
    getMaterialsUser()
}, [data])

  return (
    <div>
        <Navbar/>
        <div className='container'  >
    {data.map((mat) => <MatDetail key={mat.id} mat={mat} />)}
   </div>
    
    </div>
  )
}

export default UserMat
