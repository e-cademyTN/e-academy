import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Singup/index.jsx";
import Login from "./components/Login/index.jsx";
import Userhome from "./components/user/Userhome.jsx";
import MyMaterials from "./components/user/MyMaterials.jsx";
import {EditProfile} from "./components/user/EditProfile.jsx";
import AdminHome from "./components/admin/AdminHome.jsx";
import Students from "./components/admin/Students.jsx";
import Materials from "./components/admin/Materials.jsx";
import Teachers from "./components/admin/Teachers.jsx";


function App() {

	return (
		<Routes>
			<Route path="/students"  element={<Students/>} />
			<Route path="/materials"  element={<Materials/>} />
			<Route path="/teachers"  element={<Teachers/>} />
			<Route path="/adminHome"  element={<AdminHome/>} />
			<Route path="/updateprof"  element={<EditProfile/>} />
			<Route path="/mymaterial"  element={<MyMaterials/>} />
			<Route path="/userHome"  element={<Userhome/>} />
			<Route path="/signup"  element={<Signup />} />
			<Route path="/login"  element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
