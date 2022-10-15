import React from "react";
import { Link, NavLink } from "react-router-dom";
import {FiClock} from "react-icons/fi"
import {FiFileText} from "react-icons/fi"
import {FiBriefcase} from "react-icons/fi"
import {FiBookOpen} from "react-icons/fi"


const Navbar = () => {
  const navStyle = {
    position: "fixed",
    top: "0",
    width: "100%",
    background:"#000",
    padding:"1rem",
    zIndex:"9999999",
    boxShadow:"0 3px 10px rgba(0,0,0,0.3)",
    paddingBottom:"0px"
  }
  const ul = {
    display:"flex",
    listStyle: "none",
    justifyContent:"space-between",
    marginBottom:"0px",
    paddingTop:"1rem",
    

  }


  return (
    <nav className="navi" style={navStyle}>
      <h1 style={{fontSize:"19px", color:"white", margin:"1rem 0"}}>Times of Kashmir</h1>
      <input className="input-group" type="search" placeholder="Search...Jobs, Current Affairs, Results" />
      <ul style={ul}>
        <li >
          <NavLink exact to="/">
            <FiClock color="white" fontSize={20}/>
            <p>Recent</p>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/jobs">
            <FiBriefcase color="white" fontSize={20}/>
            <p>Jobs</p>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/exams">
        
            <FiBookOpen color="white" fontSize={20}/>
            <p>Next Exam</p>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/results">
        
            <FiFileText color="white" fontSize={20}/>
            <p>Results</p>
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
