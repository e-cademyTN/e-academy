import { useState } from "react";
import axios from '../../assets/axiosSingleton.js'

import { useNavigate} from "react-router-dom";
import  styles from "../../styles.module.css";


const Login = () => {
	const navigate=useNavigate()
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = async () => {
		try {
			const info={email,password}
		  const {status,data} = await axios.post("http://127.0.0.1:3000/api/users/signin",info);
		  if (status == 200) {

			console.log(JSON.stringify(data.logeduser))

			const id = data.logeduser.id
 			localStorage.setItem('idUser', id)
			localStorage.setItem("token",data.token);
			localStorage.setItem("user",JSON.stringify(data.logeduser));
			if(data.logeduser.role=='student')
				navigate("/userHome");
			else{navigate("/adminHome")}
		  }
		} catch (error) {
		  console.error(error);
		}
	  };
	
	return (
		<div className={styles.container}>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<form className={styles.uform_container} onSubmit={handleSubmit}>
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
						
						<button type="submit"  className={styles.blue_btn}>
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



