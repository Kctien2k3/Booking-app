import React from "react";
import "./Footer.css";
import footerData from "../../data/footer.json";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLists">
      {footerData.map((props, index) => (
          <ul key={index} className="footerList">
            {props.col_values.map((item, idx) => (
              <li key={idx} className="footerListItem">
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Footer;
