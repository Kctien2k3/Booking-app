import React from "react";
import "../home/Home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import ListCity from "../../components/list_city/ListCity";
import ListType from "../../components/list_type/ListType";
import ListHotel from "../../components/list_hotel/ListHotel";
import Footer from "../../components/footer/Footer";
import Email from "../../components/email/Email";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <ListCity/>
        <h1 className="title">Browse by property type</h1>
        <ListType/>
        <h1 className="title">Homes guests love</h1>
        <ListHotel/>
        <Email/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
