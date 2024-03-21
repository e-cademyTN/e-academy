import { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
	const navigate=useNavigate()
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = async () => {
		try {
			const info={email,password}
			console.log(info)
		  const res = await axios.post("http://127.0.0.1:3000/api/users/signin",info);
		  if (res.status == 200) {
			localStorage.setItem("token", res.data);
			navigate("/userHome");
		  }
		} catch (error) {
		  console.error(error);
		}
	  };
	
	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={(e)=>setEmail(e.target.value)}
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
						
						<button type="submit" onClick={()=>{handleSubmit()}} className={styles.green_btn}>
							Sing In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					
						<button type="button" onClick={()=>navigate('/signup')} className={styles.white_btn}>
							Sing Up
						</button>
					
				</div>
			</div>
		</div>
	);
};

export default Login;
