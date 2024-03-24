import axios from 'axios'
// import React from 'react'
import {useNavigate} from 'react-router-dom';

function MatDetail({mat}) {
    const navigateto=useNavigate()
  const token=localStorage.getItem("token")
  const user=JSON.parse(localStorage.getItem("user"))
  const handleDelete= async () => {
    alert('are you sure you want to delete ')
    try {
        const {status} = await axios.delete(`http://localhost:3000/api/material/delete/${mat.id}`,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        })
       if (status==204){
        navigateto('/materials')
       }
    } catch (error) {
        console.log(error)
    }
}
  return (
    <div className="plan">
    <div className="inner">
        <span className="pricing">
            <span>
                ${mat.price} <small>/ m</small>
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
                <span><strong>20</strong> {mat.date}</span>
            </li>
            <li>
                <span className="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                    </svg>
                </span>
                <span>Plan <strong>{mat.link}</strong></span>
            </li>
        </ul>
       {user.role==='admin'?<div>
       <div className="action">
        <a className="button" onClick={()=>{navigateto('/updateMat')}}>
            Update
        </a>
        </div>
        <div className="action">
        <a className="button" onClick={()=>{handleDelete()}}>
            Delete
        </a>
        </div></div>:<div className="action">
        <a className="button"  onClick={()=>{}}>
            Join
        </a>
        </div>}
    </div>
</div>
  )
}

export default MatDetail