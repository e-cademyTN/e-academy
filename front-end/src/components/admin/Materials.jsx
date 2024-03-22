import React,{useState,useEffect} from 'react'
import { NavBar } from './NavBar'
import './index.css'
import axios from 'axios'
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
    const addmat=()=>{

    }
    useEffect(() => {
        getAllMatiriels()
    }, [])
  return (<div className='div'>
  <NavBar/>

</div>
 )
}

export default Materials