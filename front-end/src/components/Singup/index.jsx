import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  styles from "../../styles.module.css";
import axios from "axios";



const Signup = () => {
  const [firstName, setFirst] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLast] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("role", "student");
      formData.append("file", image);

      const res = await axios.post("http://127.0.0.1:3000/api/users/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
   
      <div className={styles.container}>
        <div className={styles.form_container}>
          <div className={styles.right}>
            <h1>Welcome Back</h1>
            <button onClick={() => navigate("/login")} type="button" className={styles.white_btn}>
              Sign in
            </button>
          </div>
          <div className={styles.left}>
            <form className={styles.uform_container} onSubmit={handleSubmit}>
              <h1>Create Account</h1>
              <div className="img-holder">
                <img src={image ? URL.createObjectURL(image) : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} alt="" id="img" className="img" />
              </div>
              <input type="file" accept="image/*" onChange={handleImageChange} />
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={(e) => setFirst(e.target.value)}
                value={firstName}
                required
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={(e) => setLast(e.target.value)}
                value={lastName}
                required
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className={styles.input}
              />
              <button type="submit" className={styles.white_btn}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    
  );
};

export default Signup;
