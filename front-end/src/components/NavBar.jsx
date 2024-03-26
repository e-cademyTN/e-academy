import React, { useEffect, useState } from 'react';
import "../../src/index.css";
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
    const user=JSON.parse(localStorage.getItem("user"))
    const navigateTo =useNavigate()
    const token =localStorage.getItem("token") 
    const [hover, setHover] = useState(false);
    useEffect(()=>{
       if(!token){
        navigateTo('/login')
       }
    },[])
    const navUser = [
        { id: 1, text: 'Home', link: '/userHome' },
        { id: 2, text: 'My materials', link: '/mymaterial' },
        { id: 3, text: 'Edit profile', link: '/updateprof' }
    ];
    const navAdmin = [
        { id: 1, text: 'Home', link: '/adminHome' },
        { id: 2, text: 'materials', link: '/materials' },
        { id: 3, text: 'Students', link: '/students' },
        { id: 4, text: 'Edit profile', link: '/updateprof' }
    ];

    return (
       <div className='navbar'>
            <h1>E-Academy</h1>
            <ul>
                {user.role==='student'?navUser.map(item => (
                    <li key={item.id} onClick={() => navigateTo(item.link)} className='navbar-item'>
                        {item.text}
                    </li>
                )):navAdmin.map(item => (
                    <li key={item.id} onClick={() => navigateTo(item.link)} className='navbar-item'>
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>)
    
};

export default Navbar;
