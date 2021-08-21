import React, { Component, useState } from "react";
import Slider from "react-slick";
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import logo from '../../assets/logo2.jpg';
import restaurante from '../../assets/restauranteFake1.jpg';
import {Card, RestaurantCard, Modal, Map} from '../../components';
import { Container, Carousel,  Search, Logo, Wrapper, CarouselTitle } from "./styles";

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [modalOpned, setModalOpened] = useState (false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeignt: true,        
     };

     function handleKeyPress(e){
         if(e.key == 'Enter'){
             setQuery(inputValue);
         }
     }

    return (
    <Wrapper>
        <Container>
            <Search>
                <Logo src={logo} alt="Logo do restaurante" />
                    <TextField
                        label="Pesquisar"     
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}>
                    <Input value={inputValue} onKeyPress={handleKeyPress} onChange={(e) => setInputValue(e.target.value)}/>           
                    </TextField>
                    <CarouselTitle>Proximidades</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title="Restaurante"/>
                        <Card photo={restaurante} title="Restaurante"/>
                        <Card photo={restaurante} title="Restaurante"/>
                        <Card photo={restaurante} title="Restaurante"/>
                        <Card photo={restaurante} title="Restaurante"/>
                        <Card photo={restaurante} title="Restaurante"/>                      
                    </Carousel> 
                 {/*   <button onClick={() => setModalOpened(true)}>Abrir Modal</button> */}
            </Search>
            <RestaurantCard />
        </Container>
        <Map query={query} />
{/* <Modal open={modalOpned} onClose={() => setModalOpened(!modalOpned)} /> */}
    </Wrapper>);
};

export default Home;