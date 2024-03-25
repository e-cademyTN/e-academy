import React ,{useEffect,useState}from 'react'
import NavBar from '../NavBar.jsx'
import axios from '../../assets/axiosSingleton.js'

import MatDetail from '../admin/MatDetail.jsx'

function MyMaterials() {
    const [data, setData] = useState([])
    const getMyMaterials = async () => {
        try {
            const user=JSON.parse(localStorage.getItem("user"))

            const { data } = await axios.get(`http://localhost:3000/api/student/getmaterials/${user.id}`)
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    

    const [mat,setMat] = useState({})
    const delmat = async ()=> {
        try {
            const user=JSON.parse(localStorage.getItem("user"))
            const userId =user.id
            const materialId = mat.id
            console.log(userId)
            const res= await axios.put(`http://localhost:3000/api/student/delmaterialuser`, {userId:userId,materialId:materialId})
            console.log(res);
            getMyMaterials()
        } catch (error) {
            console.log(error)
        }
    }   
    useEffect(() => {
        getMyMaterials()
       
    }, [])
  return (
    <div> <NavBar/> 
    <div className='container'  > 
    {data.map((mat) =>  <div key={mat.id} >
    <button onClick={()=>{setMat(mat);delmat()}}>leave material</button>
    <MatDetail key={mat.id} mat={mat} /></div>)}
    
   </div>

      </div>
  )
}

export default MyMaterials