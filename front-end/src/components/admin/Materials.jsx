import React,{useState,useEffect} from 'react'
import  NavBar  from '../NavBar.jsx'
import '../../index.css'
import axios from '../../assets/axiosSingleton.js'
import MatDetail from './MatDetail.jsx'
import { useNavigate } from 'react-router'
function Materials() {
    const [data, setData] = useState([])
const navigate=useNavigate()
    const getAllMatiriels = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/api/material/getAll')
            setData(data)

        } catch (error) {
            console.log(error)
        }
    }
   
    useEffect(() => {
        getAllMatiriels()
    }, [])
    
  return (
    <div>
            <NavBar/>
             <button className='btn' onClick={()=>{navigate("/createMat")}} >Add Material</button>
        <div className='container'  >
         {data.map((mat) => <MatDetail key={mat.id} mat={mat} />)}
         </div>
    </div>)
} 
export default Materials