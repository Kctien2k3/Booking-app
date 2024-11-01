import React from "react";
import "./CityItem.css";

const CityItem = (props) => {
  return (
    <div className="listCityItem">
      <img src={props.image} alt="" className="cityImage" />
      <div className="listCityTitle">
        <h1>{props.name}</h1>
        <h2>{props.subText}</h2>
      </div>
    </div>
  );
};

export default CityItem;
