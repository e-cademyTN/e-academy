import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EditProfile.css";

export const EditProfile = () => {
  const [email, setEmail] = useState("");
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
      setEmail(data.email);
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setImage(data.imageUrl);
    } catch (err) {
      console.log("fetcher failed:", err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
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
    <div className="edit-profile-container">
      <div className="profile-header">
        <div className="profile-picture">
          <img
            className="profile-image"
            width="150px"
            src={imagePreview ? URL.createObjectURL(imagePreview) : image}
            id="profile-img"
            alt="Profile"
          />
          <div className="upload-button">
          <label className="upload-button">
  <input
    className="file-input"
    type="file"
    onChange={handleImageChange}
  />
  <span className="file-upload-btn">Choose File</span>
</label>

          </div>
        </div>
        <div className="profile-details">
          <span className="name">{firstName + " " + lastName}</span>
          <span className="email">{email}</span>
        </div>
      </div>
      <div className="profile-settings">
        <h4 className="settings-title">Profile Settings</h4>
        <div className="settings-form">
          <div className="input-group">
            <label className="label">First Name</label>
            <input
              type="text"
              className="input-field"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={firstName}
            />
          </div>
          <div className="input-group">
            <label className="label">Last Name</label>
            <input
              type="text"
              className="input-field"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder={lastName}
            />
          </div>
          <div className="input-group">
            <label className="label">Current Password</label>
            <input
              type="password"
              className="input-field"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter Current Password"
            />
          </div>
          <div className="input-group">
            <label className="label">New Password</label>
            <input
              type="password"
              className="input-field"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter New Password"
            />
          </div>
        </div>
        <div className="button-group">
          <button
            className="save-button"
            type="button"
            onClick={handleSaveProfile}
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

