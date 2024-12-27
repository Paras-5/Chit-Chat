import React from "react";
import chat from "../Images/chat.png";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <img src={chat} alt="logo" className="welcome-logo" />
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  );
};

export default Welcome;