import React from "react";
import "./TypeItem.css";

const TypeItem = (props) => {
  return (
    <div className="typeItem">
      <img src={props.image} alt="" className="typeImage" />
      <div className="typeTitles">
        <h1>{props.name}</h1>
        <h2>{props.count} hotels</h2>
      </div>
    </div>
  );
};

export default TypeItem;
