import { useSelector } from "react-redux";
import React from "react";
import "./navbar.css";

const Navbar = () => {
  const name = useSelector(state => state.user.name) // 'user' is name of store from store.js
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">Redux practice</span>
          <span className="navbarLink">Home</span>
          <span className="navbarLink">About</span>
          <span className="navbarLink">Contact</span>
        </div>
        <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="search for something..."
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          <span className="navbarName">Carmen</span>
          {/* <ArrowDropDown /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
