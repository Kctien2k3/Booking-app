import React from "react";
import "./ListType.css";
import typeData from "../../data/type.json";
import TypeItem from "./TypeItem";

const ListType = () => {
  return (
    <div className="typeContainer">
      {typeData.map((props, index) => (
        <TypeItem
          key={index}
          name={props.name}
          count={props.count}
          image={props.image}
        />
      ))}
    </div>
  );
};

export default ListType;
