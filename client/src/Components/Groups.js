import React from "react";
import "./MyStyle.css";
import logo from "../Images/chat.png";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {AnimatePresence, motion} from "framer-motion";

const Groups = () => {
  return (
    <AnimatePresence>
    <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0}} transition={{
      ease:"anticipate",
      duration:"0.3"
    }} className="list-container">
      <div className="ug-header">
        <img src={logo} style={{ height: "2rem", width: "2rem" }} />
        <p className="ug-title">Online Groups</p>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search" className="search-box"></input>
      </div>
      <div className="ug-list">
        <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.98}} className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </motion.div>
        <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.98}} className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </motion.div>
        <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.98}} className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </motion.div>
        <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.98}} className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </motion.div>
        <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.98}} className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </motion.div>
        <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.98}} className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </motion.div>
        <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.98}} className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </motion.div>
        <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.98}} className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </motion.div>
      </div>
    </motion.div>
    </AnimatePresence>
  );
};

export default Groups;
