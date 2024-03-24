import React ,{ useEffect,useState}from 'react'
import NavBar from '../NavBar'
import axios from 'axios'
import MatDetail from './MatDetail'



function Materials() {

  const [matlength, setmat] = useState(null);
    const [data, setData] = useState([])
    const getAllMatiriels = async () => {
        try {
            const token=localStorage.getItem("token")
            const {data} = await axios.get('http://localhost:3000/api/material/getAll',{
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            })
           setData(data);
           setmat(data.length)
           console.log(matlength)
        } catch (error) {
            console.log(error)
        }
    }
   
    useEffect(() => {
        getAllMatiriels()
    }, [])
    
  return (
    <div>
        <>
        <MatContext.Provider value={matlength}>
            <NavBar/>
    <div className='container'  >
    {data.map((mat) => <MatDetail key={mat.id} mat={mat} />)}
   </div>
    </MatContext.Provider>
    </>
    </div>)
}
export default Materials