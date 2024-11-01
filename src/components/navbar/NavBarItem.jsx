import React from "react";
import "./NavBarItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon


const NavBarItem = (props) => {
  return (
    <div className="navList">
      <div className={`navListItem ${props.active ? "active" : ""}`}>
        <FontAwesomeIcon icon={props.icon} />
        <span>{props.type}</span>
      </div>
    </div>
  );
};

export default NavBarItem;
