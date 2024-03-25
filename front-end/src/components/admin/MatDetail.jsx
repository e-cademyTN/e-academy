import axios from '../../assets/axiosSingleton.js'
import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';

function MatDetailJoin({mat,dummy,setD}) {
    const navigateto=useNavigate()
  const user=JSON.parse(localStorage.getItem("user"))
  const handleDelete= async () => {
    alert('are you sure you want to delete ')
    try {
        const {status} = await axios.delete(`http://localhost:3000/api/material/delete/${mat.id}`)
       if (status==204){
        setD(!dummy)
       }
    } catch (error) {
        console.log(error)
    }
}
const  addmat= async () => { 
    const user=JSON.parse(localStorage.getItem("user"))
try {
    const matId=mat.id
    const userId=user.id
    console.log(userId,matId);
    const {data} = await axios.post('http://localhost:3000/api/student/addmaterialuser',{userId:userId,materialId:matId})
    console.log(data);
} catch (error) {
    console.log(error)
}
}

  return (
    <div className="plan">
    <div className="inner">
        <span className="pricing">
            <span>
                💰{mat.price} <small> </small>
            </span>
        </span>
        <p className="title">{mat.name}</p>
        <p className="info">{mat.description}.</p>
        <ul className="features">
            <li>
                <span className="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                    </svg>
                </span>
                <span><strong> {mat.date}</strong></span>
            </li>
            <li>
                <span className="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                    </svg>
                </span>
                <span><strong><a href={mat.link}>link for lesson</a> </strong></span>
            </li>
        </ul>
       {user.role==='admin'?<div>
       <div className="action">
        <a className="button" onClick={()=>{navigateto('/updatemat' ,{state :mat})}}>
            Update
        </a>
        </div>
        <div className="action">
        <a className="button" onClick={()=>{handleDelete()}}>
            Delete
        </a>
        </div></div>:
        <div>
            <div className="action">
                  <a className="button"  onClick={()=>{addmat()}}>
                     Join
                 </a>
            </div>  
        </div> }
    </div>
</div>
  )
}

export default MatDetailJoin