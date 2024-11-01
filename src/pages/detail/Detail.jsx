import React from "react";
import "./Detail.css";
import {
  faBed,
  faCalendarDays,
  faCar,
  faLocationDot,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../components/navbar/Navbar";
import Email from "../../components/email/Email";
import Footer from "../../components/footer/Footer";
import detailData from "../../data/detail.json";

const Detail = () => {
  return (
    <div>
      <Navbar />
      <div className="detailContainer">
        {detailData.map((props, index) => (
          <div key={index} className="detailWraper">
            <div className="detailItem-1">
              <div className="hotelName">
                <h2>{props.name}</h2>
                <button>Reserve or Book Now!</button>
              </div>
              <div className="hotelDesc">
                <div className="address">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                <span>{props.address}</span>
                </div>
                <div className="distance">
                  <span>{props.distance}</span>
                </div>
                <div>
                  <span className="price">{props.price}</span>
                </div>
              </div>
            </div>
            <div className="detailItem-2">
              {props.photos.map((item, idx) => (
                <div className="imageItem">
                  <img key={idx} src={item} alt="" className="img" />
                </div>
              ))}
            </div>
            <div className="detailItem-3">
              <div className="desc">
                <h2>{props.title}</h2>
                <span>{props.description}</span>
              </div>
              <div className="bookbox">
                <h3 className="boxTitle">Perfect for a 9-night stay!</h3>
                <span className="boxDesc">
                  Located in the real heart of krakow, this property has an
                  exellent location score of 9.8!
                </span>
                <div>
                  <div className="boxPrice">
                    <h2>
                      ${props.nine_night_price}
                      <span className="sub"> (9 night)</span>
                    </h2>
                  </div>
                  <button className="boxBtn">Reserve or Book Now!</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Email />
        <Footer />
      </div>
    </div>
  );
};

export default Detail;
