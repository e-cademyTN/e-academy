import React,{useState,useEffect} from 'react'
import  NavBar  from '../NavBar.jsx'
import '../../index.css'
import axios from '../../assets/axiosSingleton.js'
import MatDetail from './MatDetail.jsx'
function Materials() {
    const [data, setData] = useState([])
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [link, setLink] = useState("")
    const [price, setPrice] = useState(0)
    const [date, setDate] = useState("")

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
    <div className='container'  >
    {data.map((mat) => <MatDetail key={mat.id} mat={mat} />)}
   </div>
    </div>)
} 
export default Materials