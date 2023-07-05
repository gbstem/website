import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

function Slideshow({ slides, banner }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <div style={banner ? {
      width: '100%',
      height: 0,
      paddingBottom: "30%",
      overflow: 'hidden'
    } : {}}>
      <Carousel interval={3000} activeIndex={currentSlide} controls={false}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="d-block w-100"
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="img-fluid banner"
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Slideshow;
