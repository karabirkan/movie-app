import React from "react";
import { NavLink } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
const Header = () => {
  return (
    <nav className="header">
      <NavLink to="/">
        <div className="logo">Movie App</div>
      </NavLink>
      <div className="user-image">
        <img src={user} alt="" />
      </div>
    </nav>
  );
};

export default Header;
