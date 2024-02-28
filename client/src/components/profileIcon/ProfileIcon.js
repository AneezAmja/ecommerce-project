import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, reset } from "../../features/user/userSlice";
import { FaSignOutAlt, FaRegUser } from "react-icons/fa";
import "./ProfileIcon.scss";

const ProfileIcon = ({ user }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  const handleProfileClick = () => {
    setOpen(!open);
  };

  return (
    <div className="profile-icon-container">
      {(user && !user.profileImageURL) || user.profileImageURL === "" ? (
        <Link className="profile-icon--no-icon" onClick={handleProfileClick} aria-label="Profile icon that when clicked opens a menu to access profile settings">
          <div className="profile-icon">{user && user?.name ? user.name.charAt(0).toUpperCase() : ""}</div>
        </Link>
      ) : (
        <Link onClick={handleProfileClick} aria-label="Profile icon that when clicked opens a menu to access profile settings">
          <img
            className="avatar-image"
            src={
              user.profileImageURL ||
              "https://static.wikia.nocookie.net/shingekinokyojin/images/a/a1/Eren_Jaeger_%28Anime%29_character_image.png/revision/latest?cb=20220123225500"
            }
            alt="placeholder for profile picture"
          />
        </Link>
      )}
      {open && (
        <div className="dropdown-menu">
          <div className="dropdown-menu__items">
            <Link className="dropdown-menu_item" to="/profile">
              <FaRegUser className="dropdown-menu_icon" />
              Profile
            </Link>
            <Link className="dropdown-menu_item" to="/" onClick={handleLogout}>
              <FaSignOutAlt className="dropdown-menu_icon" />
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
