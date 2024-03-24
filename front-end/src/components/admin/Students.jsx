import React ,{useEffect,useState}from 'react'
import NavBar from '../NavBar.jsx'
import axios from 'axios'
import UserDet from './UserDet.jsx'
function Students() {
    const [data, setData] = useState([])
    const getAllStudents = async () => {
        try {
            const token=localStorage.getItem("token")
            const {data} = await axios.get('http://localhost:3000/api/users/getAll',{
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
        getAllStudents()
    }, [])
  return (
    <div>
      <NavBar/>
        <div className='container-user'  >
    {data.map((user,index) => <UserDet key={user.id} user={user}/>)}
   </div></div>

  )
}

export default Students