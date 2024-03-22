import React from 'react'
import { NavBar } from './NavBar'
import Users from './Users'
import Teachers from './Teachers'
function AdminHome() {
  return (<div className='admin'>
   <NavBar/>
   <Teachers/>
   </div>)
}

export default AdminHome