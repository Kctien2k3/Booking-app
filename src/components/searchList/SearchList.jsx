import React from "react";
import "./SearchList.css";
import searchData from "../../data/search.json";
import SearchListItem from "../../components/searchList/SearchListItem";

const SearchList = () => {
  return (
    <div className="searchList">
      {searchData.map((props, index) => (
        <SearchListItem
          key={index}
          name={props.name}
          distance={props.distance}
          tag={props.tag}
          free_cancel = {props.free_cancel}
          type={props.type}
          description={props.description}
          price={props.price}
          rate = {props.rate}
          rate_text={props.rate_text}
          image_url={props.image_url}
        />
      ))}
    </div>
  );
};

export default SearchList;
