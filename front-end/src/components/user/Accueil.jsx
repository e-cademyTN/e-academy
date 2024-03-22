import React, { useEffect, useState } from 'react'
import { NavBar } from './NavBar.jsx'
import './navBar.css'
import './Accueil.css'
import axios from 'axios'

export const Accueil = () => {
    const [data, setData] = useState([])
console.log(data)
    const getAllMatiriels = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/api/material/getAll')
            setData(data)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getAllMatiriels()
    }, [])
    return (
        <div className='Home' >
            <NavBar />
            {data.map((ele) => {
                return(
                    <ul class="tilesWrap">
                    <li> 
                      <h3>{ele.name}</h3>
                      <p>
                        {ele.description}
                        {ele.date}
                      </p>
                      <button>Join</button>
                    </li>
                   
                  </ul>
            )})}
        </div>

    )
}

