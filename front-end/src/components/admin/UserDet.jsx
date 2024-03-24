import React from 'react'

function UserDet({user}) {
    console.log(user);
  return (
        <div class="card">
       <img className="card__avatar" src={user.imageUrl} alt="" />
    <div class="card__content">
    
    <p class="card__title">{user.firstName}</p>
 
    <p class="card__title">{user.lastName}</p>
   
    <p class="card__description">{user.email}</p>
   <center> <button className='white_btn' >see classes</button></center>
  </div> 
</div>

  )
}

export default UserDet