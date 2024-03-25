import React ,{useEffect,useState}from 'react'
import NavBar from '../NavBar'
import axios from '../../assets/axiosSingleton.js'
import MatDetail from '../admin/MatDetail'

function Userhome() {

  const [data, setData] = useState([])
  const getMyMaterials = async () => {
      try {
          const {data} = await axios.get('http://localhost:3000/api/material/getAll')
         setData(data);
      } catch (error) {
          console.log(error)
      }
  }
 
  useEffect(() => {
    getMyMaterials()
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