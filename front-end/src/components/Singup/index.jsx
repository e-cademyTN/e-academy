import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { Link} from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
  const [firstName, setfirst] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setlast] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [profileImg,setprof]=useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("email",email);
      formData.append("firstName",firstName);
      formData.append("lastName",lastName);
      formData.append("password",password);
      formData.append("role", "student");
      formData.append("imageUrl",image);
      const res = await axios.post("http://127.0.0.1:3000/api/users/signup",formData);
		  if (res.status == 201) {
        console.log("test")
			  navigate("/login");
		  }
    } catch (error) {
      console.log(error)
    }
  };
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setprof(reader.result)
        console.log(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  return (
    <div className="center">
    <div className="signup_container">
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          
            <button onClick={()=>navigate('/login')} type="button" className={styles.white_btn}>
              Sign in
            </button>
         
        </div>
        <div className="right">
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
			    
			<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
					</div>
            
					<input type="file" accept="image/*"  onChange={e=>{imageHandler(e);setImage(e.target.files[0])}} />
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={(e)=>setfirst(e.target.value)}
              value={firstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={e=>setlast(e.target.value)}
              value={lastName}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={e=>setEmail(e.target.value)}
              value={email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={e=>setPassword(e.target.value)}
              value={password}
              required
              className={styles.input}
            />
            
            <button type="submit" className={styles.green_btn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
      </div> 
    </div>
  );
};

export default Signup;