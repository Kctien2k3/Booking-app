import React from "react";
import "./HotelItem.css";

const HotelItem = (props) => {
  return (
    <div className="hotelItem">
      <img
        src={props.image_url}
        alt=""
        className="hotelImage"
      />
      <span className="hotelName">
        <a href="./hotels/0" target="_blank">
          {props.name}
        </a>
      </span>
      <span className="hotelCity">{props.city}</span>
      <span className="hotelPrice">Starting from ${props.price}</span>
      <div className="hotelRating">
        <button>{props.rate}</button>
        <span>{props.type}</span>
      </div>
    </div>
  );
};

export default HotelItem;
