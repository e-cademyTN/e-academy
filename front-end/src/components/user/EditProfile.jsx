import React, { useEffect, useState } from "react";
import axios from "axios";
import { TbPhotoEdit } from "react-icons/tb";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./EditProfile.css";

export const EditProfile = () => {
 const [email,setEmail] = useState('')
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const id = localStorage.getItem("idUser");
      const token = localStorage.getItem("token");
      const { data } = await axios.get(`http://localhost:3000/api/users/getOne/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setEmail(data.email)
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setImage(data.imageUrl);
    } catch (err) {
      console.log("fetcher failed:", err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("file:" ,file)
    setImagePreview(file);
  };

  const handleSaveProfile = async () => {
    try {
      const id = localStorage.getItem("idUser");
      const token = localStorage.getItem("token");
      const formData = new FormData();
      
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("currentPassword", currentPassword);
      formData.append("newPassword", newPassword);
      formData.append("image", imagePreview);
      
      const res = await axios.put(`http://localhost:3000/api/users/update/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      });
      console.log("Update successful:", res.data);
    } catch (err) {
      console.log("Update failed:", err);
    }
  };

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
                      src={imagePreview ? URL.createObjectURL(imagePreview) : image  }
                      id="profile-img"
                      alt="Profile"
                    />
                    <div className="edit-icon">
                      <label htmlFor="picture">
                        <input
                          className="inputimg"
                          type="file"
                          onChange={handleImageChange}
                        />
                        <TbPhotoEdit />
                      </label>
                    </div>
                  </div>
                  <span className="font-weight-bold">{firstName + " " + lastName}</span>
                  <span className="text-black-50">{email}</span>
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
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder={firstName}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder={lastName}
                      />
                    </div>
                  </div>
                  <div className="row mt-6">
                    <div className="col-md-12">
                      <label className="labels">Current Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder="Enter Current Password"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter New Password"
                      />
                    </div>
                  </div>

                  <div className="mt-5 text-center">
                    <button
                      className="btn btn-primary profile-button"
                      type="button"
                      onClick={handleSaveProfile}
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

