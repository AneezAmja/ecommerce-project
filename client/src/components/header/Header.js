import React from "react";
import "./Header.scss";
import logoImage from "../../resources/images/Luffys-jolly-roger.webp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileIcon from "../profileIcon/ProfileIcon";
import CartIcon from "../cartIcon/CartIcon";

function Header() {

  const { user } = useSelector((state) => state.user);

  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <Link to="/">
            <img src={logoImage} alt="Logo" 
            loading="lazy"
            />
          </Link>
        </div>
        <div className="header__title">
          <h1>Ecom App</h1>
        </div>
      </div>
      <div className="header__right">
        <Link className="shopping-cart__link" to="/cart">
          <CartIcon />
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
