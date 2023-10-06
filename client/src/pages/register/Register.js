import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../../features/user/userSlice";
import { toast } from "react-toastify";

import Spinner from "../../components/spinner/Spinner";

import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData; //destructring

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  // const validateEmail = (email) => {
  //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     return emailRegex.test(email);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    dispatch(register(userData));
  };

  const handleTyping = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="register-container">
      <div className="register-container__form">
        <div className="register-container__form--left">
          <div className="register-image">
            <h3 className="register-title">Create an account</h3>
          </div>
        </div>

        <div className="register-container__form--right">
          <Link to="/" className="home-link">
            Home
          </Link>
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              name="name"
              value={name}
              onChange={handleTyping}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              name="email"
              value={email}
              onChange={handleTyping}
            />

            <label htmlFor="password">Create a password:</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={password}
              onChange={handleTyping}
            />

            <button className="register-button" type="submit">
              Create account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
