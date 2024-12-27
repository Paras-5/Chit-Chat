import React from "react";
import "./MyStyle.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";


const MainContainer = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <Outlet />
      {/* <Welcome/> */}
      {/* <CreateGroups/>   */}
      {/* <ChatArea props={conversations[0]}/> */}
      {/* <Users/> */}
      {/* <Groups/> */}
    </div>
  );
};

export default MainContainer;
