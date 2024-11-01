import React from "react";
import "./SearchPopup.css";

const SearchPopup = () => {
  return (
    <div className="searchPopup">
      <h1 className="searchTitle">Search</h1>
      <div className="searchItem">
        <label>Destination</label>
        <input type="text" />
      </div>
      <div className="searchItem">
        <label>Check-in Date</label>
        <input placeholder="" value="06/24/2022 to 06/24/2024" type="text" />
      </div>
      <div className="searchItem">
        <label>Options</label>
        <div className="listOption">
          <div className="listOptionItem">
            <span className="text">
              Min price <small>per night</small>
            </span>
            <input type="number" className="input" />
          </div>
          <div className="listOptionItem">
            <span className="text">
              Max price <small>per night</small>
            </span>
            <input type="number" className="input" />
          </div>
          <div className="listOptionItem">
            <span className="text">Adult</span>
            <input type="number" className="input" />
          </div>
          <div className="listOptionItem">
            <span className="text">Children</span>
            <input type="number" className="input" />
          </div>
          <div className="listOptionItem">
            <span className="text">Room</span>
            <input type="number" className="input" />
          </div>
        </div>
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchPopup;
