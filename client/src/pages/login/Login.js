import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../features/user/userSlice";
import { toast } from "react-toastify";

import Spinner from "../../components/spinner/Spinner";

import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData; //destructring

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
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
    <div className="login-container">
      <div className="login-container__form">
        <div className="login-container__form--left">
          <Link to="/" className="home-link">
            Home
          </Link>
          <form onSubmit={handleSubmit} className="form">
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

            <button className="login-button" type="submit">
              Log in
            </button>
          </form>
        </div>

        <div className="login-container__form--right">
          <div className="login-image">
            <h3 className="login-title">Sign in</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
