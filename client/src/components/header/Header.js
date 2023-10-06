import React from "react";
import "./Header.css";
import logoImage from "../../resources/images/Luffys-jolly-roger.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import ProfileIcon from "../profileIcon/ProfileIcon";

function Header() {

  const { user } = useSelector((state) => state.user);

  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <Link to="/">
            <img src={logoImage} alt="Logo" />
          </Link>
        </div>
        <div className="header__title">
          <h1>Ecom App</h1>
        </div>
      </div>
      <div className="header__right">
        <Link className="shopping-cart" to="/">
          <FaShoppingCart
            style={{ marginRight: "30px", width: "20px", height: "20px" }}
          />
        </Link>
        {user ? (
          <div>
            <ProfileIcon user={user} />
          </div>
        ) : (
          <div className="header__auth-buttons">
            <a href="/register" className="header__sign-up-button">
              Sign Up
            </a>
            <a href="/login" className="header__login-button">
              Login
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
