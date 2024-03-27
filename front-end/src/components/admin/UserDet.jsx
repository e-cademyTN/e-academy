import React from 'react'
import { useNavigate } from 'react-router-dom'


function UserDet({ user }) {
  const navigateto = useNavigate()
  return (
    <div class="card-client">
      <div class="user-picture">
        <img src={user.imageUrl} alt="" />
      </div>
      <p className="name-client">
        {user.firstName} <br/>
        {user.lastName}
      </p>
      <button className='bttn' onClick={()=>{navigateto('/usermat',{state :user})}}>see  materials</button>
    </div>

  )
}

export default UserDet