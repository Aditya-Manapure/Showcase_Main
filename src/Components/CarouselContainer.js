import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import isro from '../Images/ISRO.jpg';
import amazon from '../Images/amazon.jpg';
import flipkart from '../Images/flipkart.jpg';
import Carousel from 'react-bootstrap/Carousel'
const CarouselContainer = () => {
    return (
        <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={flipkart}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={isro}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={amazon}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default CarouselContainer;
