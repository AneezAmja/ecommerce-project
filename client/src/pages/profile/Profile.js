import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Profile.css";
import { getUser, uploadAvatar } from "../../features/user/userSlice";
import { FaUpload } from "react-icons/fa";
import Spinner from "../../components/spinner/Spinner";


import { toast } from "react-toastify";


const Profile = () => {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.user);

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.user
  );


  // const [email, setEmail] = useState(user.email);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append("avatar", file);

    dispatch(uploadAvatar(formData)).then(()=>{
      dispatch(getUser());
    })
    
    };
    
    useEffect(() => {

      if (isError) {
        toast.error(message);
      }
  
      dispatch(getUser());

  }, [user.profileImageURL, isError, isSuccess, message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleTyping = (e) => {
    // setEmail((prevState) => ({
    //   ...prevState,
    //   [e.target.name]: e.target.value,
    // }));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="profile-container">
      {/* <div><h3>welcome back {user.name}!</h3></div> */}
      <div className="profile-container__left">
        <div className="profile-image-container">
          {user && !user.profileImageURL || user.profileImageURL === "" ? (
            <div className="profile-image--default">
              {user.name.charAt(0).toUpperCase()}
            </div>
          ) : (

            <img
              className="profile-image"
              src={`uploads/${user.profileImageURL}` || "https://static.wikia.nocookie.net/shingekinokyojin/images/a/a1/Eren_Jaeger_%28Anime%29_character_image.png/revision/latest?cb=20220123225500"}
              alt=""
            />
          )}
        </div>
        {/* <button className="upload-image">upload new picture</button> */}
        <form action="/upload-avatar" method="post" encType="multipart/form-data">
          <div className="file-input-container">
            <FaUpload fill="#1d1d1d" />
            <input
              type="file"
              name="avatar"
              className="upload-image"
              onChange={handleFileChange}
            />
          </div>
          {/* <input type="submit" className="save-image" onClick={handleUpload}/> */}
          <button className="save-image" onClick={handleUpload}>
            submit
          </button>
        </form>
      </div>
      <div className="profile-container__right">
        <form className="form" onSubmit={handleSubmit}>
          <div className="email-container">
            <label className="email">Change email</label>
            <input type="text" />
            {/* <input type="text" value={email} onChange={handleTyping} /> */}
          </div>
          <div className="password-container">
            <label className="password">Change password</label>
            <input type="text" />
          </div>

          <button className="confirm-button" type="submit">
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
