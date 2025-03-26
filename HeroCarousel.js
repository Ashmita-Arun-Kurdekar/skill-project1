import React from "react";
import { Carousel } from "react-bootstrap";

const HeroCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
      <img
  className="d-block mx-auto"
  style={{ width: "60%", height: "auto" }}
  src="/images/banner1.jpeg"
  alt="First slide"
/>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          style={{ width: "60%", height: "auto" }}
          src="/images/banner2.jpeg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          style={{ width: "60%", height: "auto" }}
          src="/images/banner3.jpeg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
