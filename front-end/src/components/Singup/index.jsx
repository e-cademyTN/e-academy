import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "student",
    image: null,
  });
 const[ profileImg,setprof]=useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    if (input.type === "file") {
      setData({ ...data, image: input.files[0] });
    } else {
      setData({ ...data, [input.name]: input.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("role", data.role);
      formData.append("image", data.image);
      const url = "http://localhost:8080/api/user/signin";
      const { status} = await axios.post(url, formData);
      if (status==200) {
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
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sign in
            </button>
          </Link>
        </div>
        <div className="right">
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
			    
			<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
					</div>
            
					<input type="file" accept="image/*"  onChange={e=>imageHandler(e)} />
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
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