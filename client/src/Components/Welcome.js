import React from "react";
import chat from "../Images/chat.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Welcome = () => {

  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const nav = useNavigate();
  if(!userData){
    console.log("User not Authenticated");
    nav("/");
  }

  return (
    <div className="welcome-container">

      <motion.img   whileTap={{ scale:1.05 , rotate:360 }} drag src={chat} alt="logo" className="welcome-logo" />
      <b>Hi , {userData.data.name}</b>
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  );
};

export default Welcome;