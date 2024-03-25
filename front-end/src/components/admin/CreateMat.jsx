import axios from "../../assets/axiosSingleton.js"
import React, { useState } from 'react'
import './CreateMat.css';
import Navbar from '../NavBar';
import { useNavigate } from "react-router";

const CreateMat = () => {
    const [name, setName] = useState('')
    const [description, setDes] = useState('')
    const [price, setPrice] = useState(0)
    const [date, setDate] = useState('')
    const [link, setLink] = useState('')
    const navigate=useNavigate()

    const addMat = async (name, description, price, date, link) => {
        try {

            const material = await axios.post("http://localhost:3000/api/material/add", {
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
                <h1>Create Material</h1>
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                    {/* Your content here */}
                    <input
                        className="input-field"
                        onChange={(ele) => { setName(ele.target.value) }}
                        placeholder='name'
                        type='text'
                    />
                    <input
                        className="input-field"
                        onChange={(ele) => { setDes(ele.target.value) }}
                        placeholder='description'
                        type='text'
                    />
                    <input
                        className="input-field"
                        onChange={(ele) => { setPrice(ele.target.value) }}
                        placeholder='price'
                        type='number'
                    />
                    <input
                        className="input-field"
                        onChange={(ele) => { setDate(ele.target.value) }}
                        placeholder='date'
                    />
                    <input
                        className="input-field"
                        onChange={(ele) => { setLink(ele.target.value) }}
                        placeholder='link'
                        type='url'
                    />
                    <button
                        className="submit-button"
                        onClick={() => { addMat(name, description, price, date, link) }}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>




    )
}

export default CreateMat