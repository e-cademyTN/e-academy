import React,{useContext,createContext} from 'react'
import NavBar from '../NavBar'
import MatContext from './Materials'
export const MatContext=createContext()
function AdminHome() {
 
  const  matlength  = useContext(MatContext);

 
 
 
 
 
 
  return (
    <div> 
      <NavBar/>
      <div>
{matlength}hgfghgfd
      </div>
    </div>

  )
}

export default AdminHome