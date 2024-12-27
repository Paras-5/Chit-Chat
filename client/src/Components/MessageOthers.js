import React from "react";

const MessageOthers = () => {
  var prop1 = { name: "RandomUser", message: "This is a Sample Message" };
  return (
    <div className="other-message-container">
      <div className="conversation-container">
        <p className="con-icon">{prop1.name[0]}</p>
        <div className="other-text-content">
          <p className="con-title">{prop1.name}</p>
          <p className="con-lastMessage">{prop1.message}</p>
          <p className="self-timeStamp">12:00am</p>
        </div>
      </div>
    </div>
  );
};

export default MessageOthers;
