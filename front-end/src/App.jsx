import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Singup/index.jsx";
import Login from "./components/Login/index.jsx";
import Userhome from "./components/user/Userhome.jsx";
import MyMaterials from "./components/user/MyMaterials.jsx";
import { EditProfile } from "./components/user/EditProfile.jsx";
import AdminHome from "./components/admin/AdminHome.jsx";
import Students from "./components/admin/Students.jsx";
import Materials from "./components/admin/Materials.jsx";
import UserMaterials from "./components/user/UserMaterials.jsx";
import CreateMat from "./components/admin/CreateMat.jsx";
import UpdateMat from "./components/admin/UpdateMat.jsx";
import UserMat from "./components/admin/UserMat.jsx";
import ActivationPage from "./components/ActivationPage.jsx";

function App() {
  const token =localStorage.getItem('token')
  return (
   ( <Routes>
    < Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirm" element={<ActivationPage />} />
      <Route path="/createMat" element={<CreateMat />} />
      <Route path="/students" element={<Students />} />
      <Route path="/materials" element={<Materials />} />
      <Route path="/adminHome" element={<AdminHome />} />
      <Route path="/updateprof" element={<EditProfile />} />
      <Route path="/mymaterial" element={<MyMaterials />} />
      <Route path="/userHome" element={<Userhome />} />
      <Route path="/usermaterials" element={<UserMaterials />} />
      <Route path="/updatemat" element={<UpdateMat />} />
      <Route path="/usermat" element={<UserMat />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>)
  );
}

export default App;
