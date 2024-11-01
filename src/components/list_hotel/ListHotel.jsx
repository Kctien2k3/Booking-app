import React from "react";
import './ListHotel.css';
import hotelData from '../../data/hotel_list.json';
import HotelItem from '../list_hotel/HotelItem';

const ListHotel = () => {
    return (
        <div className="hotelContainer">
            {hotelData.map((props, index) => (
                <HotelItem
                key = {index}
                name = {props.name}
                city = {props.city}
                price = {props.price}
                rate = {props.rate}
                type = {props.type}
                image_url = {props.image_url}
                />
            ))}
        </div>
    );
}

export default ListHotel;