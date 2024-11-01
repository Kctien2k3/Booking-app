import React from "react";
import "./ListCity.css";
import cityData from "../../data/city.json";
import CityItem from "./CityItem";

const ListCity = () => {
  return (
    <div className="listCity">
      <div className="listCityItem">
        {cityData.map((props, index) => (
          <CityItem
            key={index}
            name={props.name}
            image={props.image}
            subText={props.subText}
          />
        ))}
      </div>
    </div>
  );
};

export default ListCity;
