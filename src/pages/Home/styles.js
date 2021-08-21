import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Container = styled.aside`
    background-color: ${(props)=> props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
    `;

export const Search = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #ffffff;
padding: 0px;
`;  

export const Logo = styled.img`
    margin-bottom:1px;
`;

export const Map = styled.div`
    background-color: green;
    width: 500px;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
      margin-right: 16px;
  },
  .slick-list{
    height: 110px; 
  }

`;

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props)=> props.theme.colors.text};
    font-size: 20px;
    line-height: 25px;
    margin: 16px 0;
    margin-left: 10px;
`;
