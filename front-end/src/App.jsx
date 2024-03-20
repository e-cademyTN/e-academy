import { Route, Routes, Navigate } from "react-router-dom";
import Signup from ".//components/Singup/index.jsx";
import Login from "./components/Login/index.jsx";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			<Route path="/signup"  element={<Signup />} />
			<Route path="/login"  element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
