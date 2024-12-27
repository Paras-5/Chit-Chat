import React from "react";
import chat from "../Images/chat.png";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={chat} alt="Logo" className="welcome-logo" />
      </div>
      <div className="login-box">
        <p>Login to your Account</p>
        <TextField
          id="standard-basic"
          label="Enter User Name"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          autoComplete="current-password"
          type="password"
        />
        <Button variant="outlined" >
         Login 
        </Button>
      </div>
    </div>
  );
};

export default Login;
