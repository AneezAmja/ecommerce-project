import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Profile.scss";
import {
  getUser,
  uploadAvatar,
  updateUserEmail,
  // updateUserPassword
} from "../../features/user/userSlice";
import { FaUpload } from "react-icons/fa";
import Spinner from "../../components/spinner/Spinner";

import { toast } from "react-toastify";

const Profile = () => {
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.user
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData; //destructring

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const imageFormData = new FormData();
    imageFormData.append("avatar", file);

    dispatch(uploadAvatar(imageFormData)).then(() => {
      dispatch(getUser());
    });

    toast.success("Profile avatar updated successfully.");

  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getUser());
  }, [isError, isSuccess, message, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleTyping = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const updateCredentials = () => {
    try {
      if (email !== user.email) {
        dispatch(updateUserEmail({ updatedEmail: email })).then(() => {
          dispatch(getUser());
        });
      }

      // if (password) {
      //   dispatch(updateUserPassword({ updatedPassword: password })).then(() => {
      //     dispatch(getUser());
      //   });
      // }


      toast.success("Credentials updated successfully.");
    } catch (error) {
      toast.error("Error updating email.");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="profile-container">
      <div className="profile-container__left">
        <div className="profile-image-container">
          {user && user.profileImageURL ? (
            <img
              className="profile-image"
              src={`${user?.profileImageURL}`}
              alt=""
            />
          ) : (
            <div className="profile-image--default">
              {user && user?.name ? user.name.charAt(0).toUpperCase() : ""}
            </div>
          )}
        </div>
        <form
          action="/upload-avatar"
          method="post"
          encType="multipart/form-data"
        >
          <div className="file-input-container">
            <FaUpload fill="#1d1d1d" />
            <input
              type="file"
              name="avatar"
              className="upload-image"
              onChange={handleFileChange}
            />
          </div>
          <button className="save-image" onClick={handleUpload}>
            Submit
          </button>
        </form>
      </div>
      <div className="profile-container__right">
        <form className="form" onSubmit={handleSubmit}>
          <div className="email-container">
            <label className="email">Change email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={user.email}
              value={email}
              onChange={handleTyping}
            />
          </div>
          <div className="password-container">
            <label className="password">Change password</label>
            <input
              type="password"
              placeholder="Update password"
              id="password"
              name="password"
              value={password}
              onChange={handleTyping}
            />
          </div>

          <button className="confirm-button" onClick={updateCredentials}>
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
