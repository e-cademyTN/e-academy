import React ,{useEffect,useState}from 'react'
import NavBar from '../NavBar.jsx'
import axios from '../../assets/axiosSingleton.js'
import MatDetail from '../admin/MatDetail.jsx'
function MyMaterials() {
    const [data, setData] = useState([])
    const getMyMatiriels = async () => {
        try {
           
            const user=JSON.parse(localStorage.getItem("user"))

            const { data } = await axios.get(`http://localhost:3000/api/student/getmaterials/${user.id}`)
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }
   
    useEffect(() => {
        getMyMatiriels()
    }, [])
  return (
    <div> <NavBar/> 
    <div className='container'  >
    {data.map((mat) => <MatDetail key={mat.id} mat={mat} />)}
   </div>
      </div>
  )
}

export default MyMaterials