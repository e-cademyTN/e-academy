import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Signup from ".//components/Singup/index.jsx";
import Login from "./components/Login/index.jsx";
import { Accueil } from "./components/user/Accueil.jsx";
import MyMatiriels from "./components/user/MyMatiriels.jsx";
import { EditProfile } from "./components/user/EditProfile.jsx";
import { MatirialDetail } from "./components/user/MatirialDetail.jsx";

function App() {
	const user = localStorage.getItem("token");
    const [selectedmat, setmat] = useState({})

	return (
		<Routes>
			
			<Route path="/signup"  element={<Signup />} />
			<Route path="/login"  element={<Login />} />
			<Route path="/userHome"  element={<Accueil setmat={setmat} />} />
			<Route path="/myMatiriels"  element={<MyMatiriels />} />
			<Route path="/editProfile"  element={<EditProfile />} />
			<Route path="/matirialDetail"  element={<MatirialDetail selectedmat={selectedmat} />} />
			
			
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
