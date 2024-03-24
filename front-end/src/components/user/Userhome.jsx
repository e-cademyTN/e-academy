import React ,{useEffect,useState}from 'react'
import NavBar from '../NavBar'
import axios from 'axios'
import MatDetail from '../admin/MatDetail'

function Userhome() {
  const token=localStorage.getItem("token")
  const [data, setData] = useState([])
  const getAllMatiriels = async () => {
      try {
          const {data} = await axios.get('http://localhost:3000/api/material/getAll',{
              headers: {
                  Authorization: `Bearer ${token}`
                }
          })
         setData(data);
      } catch (error) {
          console.log(error)
      }
  }
 
  useEffect(() => {
      getAllMatiriels()
  }, [])
   
    
  return (
    <div><NavBar/>
    <div className='container'  >
    {data.map((mat) => <MatDetail key={mat.id} mat={mat} />)}
   </div>
    
    </div>
    
  ) 
}

export default Userhome