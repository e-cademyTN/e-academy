import React, { useEffect, useState } from 'react'
import { NavBar } from './NavBar.jsx'
import './navBar.css'
import './Accueil.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Accueil = ({setmat}) => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
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
            <h1 style={{ "textAlign": "center" }}>Welcome</h1>
            <div className='container'  >
                {data.map((ele) => {
                    return (
                        <div onClick={()=>{setmat(ele)
                        navigate('/matirialDetail')
                        }} key={ele.id} className="plan">
                            <div className="inner">
                                <span className="pricing">
                                    <span>
                                        <small>{ele.price}$</small>
                                    </span>
                                </span>
                                <p className="title">{ele.name}</p>

                                <ul className="features">
                                    <li>
                                        {ele.date}
                                    </li>
                                </ul>
                                <div className="action">
                                    <button onClick={() => console.log('aa')} className="button">
                                        Join
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}