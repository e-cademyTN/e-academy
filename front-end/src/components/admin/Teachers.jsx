import React ,{useEffect,useState}from 'react'
import NavBar from '../NavBar'
import axios from 'axios'
import TeacherDet from './TeacherDet'

function Teachers() {
    const [data, setData] = useState([])
    const getAllMatiriels = async () => {
        try {
            const token=localStorage.getItem("token")
            const {data} = await axios.get('http://localhost:3000/api/teacher/getAll',{
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
     <div className='container-teacher'  >
    {data.map((teacher) => <TeacherDet key={teacher.id} teacher={teacher}/>)}
   </div>
    </div>
  )
}

export default Teachers