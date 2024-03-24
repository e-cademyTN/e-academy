import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../user/EditProfile.css";
import { TbPhotoEdit } from "react-icons/tb";
import axios from "axios";


export const EditProfile = () => {
  const [user,setUser] = useState([])
  const [firstName, setFirst] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLast] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  console.log(user)

  const fetchUser = async()=>{
      try{
        const id = localStorage.getItem('idUser')
        const token = localStorage.getItem('token')
        const {data}= await axios.get(`http://localhost:3000/api/users/getOne/${id}`, 
        {headers: {
          Authorization: `Bearer ${token}`
        }})
        setUser(data)
      }
      catch(err){
          console.log(err)
      }
  }

  useEffect(()=>{
fetchUser()
  },[])

  const update = async()=>{
    try{
      const id = localStorage.getItem('idUser')
        const res = await axios.put(`http://localhost:3000/api/users/update/${id}`,{

        })
    }catch(err){
console.log(err)
    }
  }
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-12"> 
          <div className="containerr rounded bg-white mt-9 mb-9">
            <div className="row">
              <div className="col-md-6 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <div className="profile-container">
                    <img
                      className="rounded-circle mt-5 profile-img"
                      width="150px"
                      src={user.imageUrl}
                      id="profile-img"
                      alt="Profile"
                    />
                    <div className="edit-icon">
                      <label htmlFor="picture">
                        <input
                          className="inputimg"
                          type="file"
                          name="picture"
                        />
                        <TbPhotoEdit />
                      </label>
                    </div>
                  </div>
                  <span className="font-weight-bold">{user.firstName + ' '+ user.lastName}</span>
                  <span className="text-black-50">{user.email}</span>
                  <span></span>
                </div>
              </div>
              <div className="col-md-5 border-right">
                <div className="container-2">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 className="text-right">Profile Settings</h4>
                  </div>
                  <div className="row mt-9">
                    <div className="col-md-6">
                      <label className="labels">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={user.firstName}
                        value=""

                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value=""
                        placeholder={user.lastName}
                      />
                    </div>
                  </div>
                  <div className="row mt-6">
                    <div className="col-md-12">
                      <label className="labels">Current Password</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter Current Password"
                        value=""
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">New Password</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter New Password"
                        value=""
                      />
                    </div>
                  </div>

                  <div className="mt-5 text-center">
                    <button
                      className="btn btn-primary profile-button"
                      type="button"
                    >
                      Save Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
