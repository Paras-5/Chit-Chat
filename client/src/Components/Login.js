import React, { useState } from "react";
import chat from "../Images/chat.png";
import TextField from "@mui/material/TextField";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Toaster from "./Toaster";

const Login = () => {
  const [showlogin, setShowLogin] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const [logInStatus, setLoginInStatus] = useState("");
  const [signInStatus, setSignInStatus] = useState("");

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    setLoading(true);
    console.log(data);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:5000/user/login/",
        data,
        config
      );
      console.log("login:", response);
      setLoginInStatus({ msg: "Success", key: Math.random() });
      setLoading(false)
      localStorage.setItem("userData" , JSON.stringify(response))
      navigate("/app/welcome");
    } catch (error) {
      console.log(error);
        setLoginInStatus({
          msg: "Invalid UserName or Password ",
          key: Math.random(),
        });
    }
    setLoading(false);
  };

  const signUpHandler = async (e) => {
    setLoading(true);
    console.log(data);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:5000/user/register",
        data,
        config
      );
      console.log(response);
      setSignInStatus({ msg: "Success", key: Math.random() });
      navigate("/app/welcome");
      localStorage.setItem("userData", JSON.stringify(response));
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.response === 405) {
        setLoginInStatus({
          msg: "User with email ID already Exists",
          key: Math.random(),
        });
      }
      if (error.response === 406) {
        setLoginInStatus({
          msg: "User Name already Taken , Please take another name",
          key: Math.random(),
        });
      }
      setLoading(false);
    }
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="secondary" />
      </Backdrop>

      <div className="login-container">
        <div className="image-container">
          <img src={chat} alt="Logo" className="welcome-logo" />
        </div>
        {showlogin && (
          <div className="login-box">
            <p>Login to your Account</p>
            <TextField
              onChange={changeHandler}
              label="Enter User Name"
              variant="outlined"
              name ="name"
            />
            <TextField
              onChange={changeHandler}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              name="password"
            />
            <Button
              variant="outlined"
              color="secondry"
              onClick={loginHandler}
            >
              Login
            </Button>
            <p className="login-ques">
              Don't have an Account ? {" "}
              <span
                className="hyper"
                onClick={() => {
                  setShowLogin(false);
                }}
              >
                SignUp
              </span>
            </p>
            {logInStatus ? (
              <Toaster key={logInStatus.key} message={logInStatus.msg} />
            ) : null}
          </div>
        )}
        {!showlogin && (
          <div className="login-box">
            <p>Create your Account</p>
            <TextField
              onChange={changeHandler}
              label="Enter User Name"
              variant="outlined"
              name="name"
            />
            <TextField
              onChange={changeHandler}
              label="Enter Email Address"
              variant="outlined"
              name="email"
            />
            <TextField
              onChange={changeHandler}
              id="outlined-password-input"
              label="Password"
              autoComplete="current-password"
              type="password"
              name="password"
            />
            <Button variant="outlined" color="secondry" onClick={signUpHandler}>
              SignUp
            </Button>
            <p className="login-ques">
              Already have an Account ? {" "}
              <span
                className="hyper"
                onClick={() => {
                  setShowLogin(true);
                }}
              >
                Login
              </span>
            </p>
            {signInStatus ? (
              <Toaster key={signInStatus.key} message={signInStatus.msg} />
            ) : null}
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
