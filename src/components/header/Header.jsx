import React from "react";
import "../header/Header.css";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Header = () => {
  /// handle calendar
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  /// handle direction
  const SearchHandle = () => {
    location.replace("/search");
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="title">A lifetime of discounts? It's Genius.</h1>
        <p className="desc">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free account
        </p>
        <button className="searchBtn">Sign in / Register</button>

        <div className="formSearch">
          <div className="formSearchItem">
            <FontAwesomeIcon icon={faBed} className="searchIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="searchInput"
            
            />
          </div>

          <div className="formSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="searchIcon" />
            <span
              onClick={() => setOpenCalendar(!openCalendar)}
              className="searchText"
            >
              {`${date[0].startDate, "MM/dd/yyyy"} to ${
                date[0].endDate,
                "MM/dd/yyyy"
              }`}
            </span>
            {openCalendar && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>

          <div className="formSearchItem">
            <FontAwesomeIcon icon={faPerson} className="searchIcon" />
            <span className="searchText"> 1 dult - 0 children - 1 room</span>
          </div>
          <div className="formSearchItem">
            <button className="searchBtn" onClick={SearchHandle}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
