import React,{useState,useEffect} from 'react'
import  NavBar  from '../NavBar.jsx'
import '../../index.css'
import axios from '../../assets/axiosSingleton.js'
import MatDetail from './MatDetail.jsx'
import { useNavigate } from 'react-router'
function Materials() {
    const [data, setData] = useState([])
    const [dummy, setD] = useState(false)
    const [term, setterm] = useState("")
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
    }, [dummy])
    
      const searched = (term) => {
        return data.filter((mat) => mat.name.toLowerCase().indexOf(term.toLowerCase()) >= 0).map((mat) => (
            <MatDetail key={mat.id} mat={mat} dummy={dummy} setD={setD}/>
        ))
      }
  return (
    <div>
            <NavBar/>
            <input type="text" className='btn' placeholder='search' onChange={(e) => setterm(e.target.value)} />
             <button className='btn' onClick={()=>{navigate("/createMat")}} >Add Material</button>
        <div className='container'  >
        {searched(term)}
         </div>
    </div>)
} 
export default Materials