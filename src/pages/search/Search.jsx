import { useState } from "react";
import React from "react";
import "./Search.css";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SearchList from "../../components/searchList/SearchList";
import SearchPopup from "../../components/searchPopup/SearchPopup";

const Search = () => {
  return (
    <div>
      <NavBar />
      <div className="searchContainer">
        <div className="wrapper">
          <SearchPopup/>
          <div className="listResult">
            <SearchList />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Search;
