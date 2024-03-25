import React ,{useEffect,useState}from 'react'
import NavBar from '../NavBar'
import axios from '../../assets/axiosSingleton.js'
import TeacherDet from './TeacherDet'

function Teachers() {
    const [data, setData] = useState([])
    const getAllMatiriels = async () => {
        try {
            const {data} = await axios.get('http://localhost:3000/api/teacher/getAll')
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