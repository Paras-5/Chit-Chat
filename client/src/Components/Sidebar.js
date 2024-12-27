import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import ConversationsItem from "./ConversationsItem";
import { useNavigate } from "react-router-dom";
import { toggleTheme } from "../Features/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const lightTheme = useSelector(state=> state.themekey);
  const dispatch = useDispatch();
  const [conversations, setConversations] = useState([
    {
      name:"Test#1",
      lastMessage:"Last Message #1",
      timeStamp:"today"
    },
    {
      name:"Test#2",
      lastMessage:"Last Message #2",
      timeStamp:"today"
    },
    {
      name:"Test#3",
      lastMessage:"Last Message #3",
      timeStamp:"today"
    }
  ])


  var navigate = useNavigate();
  return (
    <div className="sidebar-container">
      <div className={`sb-header ${lightTheme ? "" :"dark"}`} >
        <div>
          <IconButton>
            <AccountCircleIcon className={`${lightTheme ? "" :"dark"}`} />
          </IconButton>
        </div>
        <div className="other-icons">
          <IconButton onClick={() => navigate("users")}>
            <PersonAddIcon className={`${lightTheme ? "" :"dark"}`}/>
          </IconButton>
          <IconButton onClick={() => navigate("groups")}>
            <GroupAddIcon className={`${lightTheme ? "" :"dark"}`}/>
          </IconButton>
          <IconButton onClick={() => navigate("create-groups")}>
            <AddCircleIcon className={`${lightTheme ? "" :"dark"}`}/>
          </IconButton>
          <IconButton onClick={()=>dispatch(toggleTheme())} className={`${lightTheme ? "" :"dark"}`}>
           { lightTheme && <NightlightIcon />}
           { !lightTheme && <LightModeIcon />}
          </IconButton>
        </div>
      </div>
      <div className={`sb-search ${lightTheme ? "" :"dark"}`}>
        <IconButton>
          <SearchIcon className={`${lightTheme ? "" :"dark"}`} />
        </IconButton>
        <input placeholder="Search" className={`search-box ${lightTheme ? "" :"dark"}`} />
      </div>
      <div className={`sb-conversations ${lightTheme ? "" :"dark"}`}>
        {conversations.map((conversation)=>{
          return <ConversationsItem props ={conversation} key={conversation.name}/>
        })}
      </div>
    </div>
  );
};

export default Sidebar;
