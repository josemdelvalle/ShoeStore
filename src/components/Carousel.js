import React, {useContext} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from './ProductCard';
import {ShoeContext} from '../ShoeContext/ShoeContext'


const Carousel = (props) => {
 
var {shoes}=useContext(ShoeContext);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "white",fontSize:"50px" }}
        onClick={onClick}
      />
    );
  }


  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,color:"black", display: "block", background: "white" }}
        onClick={onClick}
      ></div>
    );
  }
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    
  };
   return(
     
    <div className="carousel">
      
      <h2 className="carouselTitle">SHOP NOW</h2>
        <div>
        <Slider {...settings}>
        {shoes.map(shoe=>{return(<div className="carouselDiv">
    <ProductCard images={shoe.images} price={shoe.price}sale={shoe.sale}name={shoe.name}color={shoe.colors}></ProductCard>
  </div>)})}          
        </Slider>
      </div>
    </div>
   );
   
    
 }
  
 export default Carousel