import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import restaurante from '../../assets/restauranteFake1.jpg';
import Skeleton from '../Skeleton';

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from "./styles";

const RestaurantCard = ({ restaurant, onClick }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    return (
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars count={5} isHalf edit={false} value={restaurant.rating} activeColor="#000000" />
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantPhoto
                imageLoaded={imageLoaded}
                src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                onLoad={() => setImageLoaded(true)}
                alt="Foto do Restaurante" />
            {!imageLoaded && <Skeleton width="50px" height="50px" />}
        </Restaurant>
    );

};

export default RestaurantCard;
