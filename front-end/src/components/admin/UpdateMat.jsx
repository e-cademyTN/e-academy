import axios from '../../assets/axiosSingleton.js'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './CreateMat.css';
import Navbar from '../NavBar';

const UpdateMat = () => {
    const { state } = useLocation()
    const mat = state
    const [name, setName] = useState(mat.name)
    const [description, setDes] = useState(mat.description)
    const [price, setPrice] = useState(mat.price)
    const [date, setDate] = useState(mat.date)
    const [link, setLink] = useState(mat.link)
    const navigate = useNavigate()

    console.log(mat.id)


    const updateMaterial = async (name, description, price, date, link) => {
        try {

            const material = await axios.put(`http://localhost:3000/api/material/update/${mat.id}`, {
                name,
                description,
                price,
                date,
                link,
            })
            navigate("/materials")
            console.log(material);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Navbar />
            <div className="create-mat-container">
                <h1>Update Material</h1>
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                    <input
                        value={name}
                        className="input-field"
                        onChange={(ele) => { setName(ele.target.value) }}
                        placeholder='name'
                        type='text'
                    />
                    <input
                        value={description}
                        className="input-field"
                        onChange={(ele) => { setDes(ele.target.value) }}
                        placeholder='description'
                        type='text'
                    />
                    <input
                        value={price}
                        className="input-field"
                        onChange={(ele) => { setPrice(ele.target.value) }}
                        placeholder='price'
                        type='number'
                    />
                    <input
                        value={date}
                        className="input-field"
                        onChange={(ele) => { setDate(ele.target.value) }}
                        placeholder='date'
                    />
                    <input
                        value={link}
                        className="input-field"
                        onChange={(ele) => { setLink(ele.target.value) }}
                        placeholder='link'
                        type='url'
                    />
                    <button
                        className="submit-button"
                        onClick={() => { updateMaterial(name, description, price, date, link) }}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>




    )
}

export default UpdateMat