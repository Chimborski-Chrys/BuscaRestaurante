import React from "react";
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from "./styles";
import ReactStars from "react-rating-stars-component";
import restaurante from '../../assets/restauranteFake1.jpg'

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome Restaurante</Title>
            <ReactStars count={5} isHalf edit={false} value={4} />
            <Address>Rua Parana, 125</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurante} alt="Foto do Restaurante"/>
    </Restaurant>
);

export default RestaurantCard;
