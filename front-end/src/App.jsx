import { Route, Routes, Navigate } from "react-router-dom";
import Signup from ".//components/Singup/index.jsx";
import Login from "./components/Login/index.jsx";
import { Accueil } from "./components/user/Accueil.jsx";
import MyMatiriels from "./components/user/MyMatiriels.jsx";
import { EditProfile } from "./components/user/EditProfile.jsx";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			
			<Route path="/signup"  element={<Signup />} />
			<Route path="/login"  element={<Login />} />
			<Route path="/userHome"  element={<Accueil />} />
			<Route path="/myMatiriels"  element={<MyMatiriels />} />
			<Route path="/editProfile"  element={<EditProfile />} />
			
			
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
