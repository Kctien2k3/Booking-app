import React from "react";
import "./SearchListItem.css";

const SearchListItem = (props) => {
  const SearchHandle = () => {
    location.replace("/detail");
  }
  return (
      <div className="resultItem">
        <img src={props.image_url} alt="" className="resultImage" />
        <div className="resultDetail-1">
          <h1 className="resultTitle">{props.name}</h1>
          <span className="resultDistance">{props.distance} from center</span>
          <span className="resultTag">{props.tag}</span>
          <span className="resultDesc">{props.description}</span>
          <span className="resultType">{props.type}</span>
          {/* If can cancel */}
          {props.free_cancel ? (
            <div>
              <span className="resultCancel">Free cancellation </span>
              <span className="resultCancelSubtitle">
                You can cancel later, so lock in this great price today!
              </span>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resultDetail-2">
          <div className="resultRating">
            <span>{props.rate_text}</span>
            <button>{props.rate}</button>
          </div>
          <div className="resultTexts">
            <span className="resultPrice">${props.price}</span>
            <span className="resultTax">Includes taxes and fees</span>
            <button className="searchCheckButton"  onClick={SearchHandle}>See availability</button>
          </div>
        </div>
      </div>
  );
};

export default SearchListItem;
