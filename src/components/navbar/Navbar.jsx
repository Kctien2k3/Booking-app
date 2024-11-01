import React from "react";
import "../navbar/Navbar.css";
import NavBarItem from "../navbar/NavBarItem";
import navData from "../../data/navBar.json";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

// Mapping icon names from JSON to actual FontAwesome icons
const iconMap = {
  "fa-bed": faBed,
  "fa-plane": faPlane,
  "fa-car": faCar,
  "fa-taxi": faTaxi,
  "fa-calendar-days": faCalendarDays, // Example for another icon
};

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navWrapper">
        <div className="navContainer">
          <div className="logo">Booking Website</div>
          <div className="navItem">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>
        <div className="navList">
          {navData.map((props, index) => (
            <NavBarItem
              key={index}
              type={props.type}
              icon={iconMap[props.icon]}
              active={props.active}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
