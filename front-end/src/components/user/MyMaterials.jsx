import React ,{useEffect,useState}from 'react'
import NavBar from '../NavBar'
import axios from 'axios'
import MatDetail from '../admin/MatDetail'
function MyMaterials() {
    const [data, setData] = useState([])
    const getMyMatiriels = async () => {
        try {
            const token=localStorage.getItem("token")
            const user=JSON.parse(localStorage.getItem("user"))

            const { data } = await axios.get(`http://localhost:3000/api/student/getmaterials/${user.id}`,{
            headers: {
                Authorization: `Bearer ${token}`
              }})
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