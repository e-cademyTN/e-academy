import React from 'react'

function UserDet({ user }) {
  console.log(user);
  return (
    <div class="card-client">
      <div class="user-picture">
        <img src={user.imageUrl} alt="" />
      </div>
      <p class="name-client">
        {user.firstName} <br/>
        {user.lastName}
      </p>
    </div>

  )
}

export default UserDet