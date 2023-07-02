import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import slide1 from "../../images/zoomScreenshots/Screenshot (1).png";
import slide2 from "../../images/zoomScreenshots/Screenshot (2).png";
import slide3 from "../../images/zoomScreenshots/Screenshot (4).png";

function OurMission() {
  const slides = [slide1, slide2, slide3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <div className="container mb-5">
      <div>
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-center">Our mission</h1>
            <p>
              We believe that everyone should have the opportunity to build strong foundational skills in
              computer science, math, and engineering, no matter what their background or location is.
            </p>

            <div className="button">
              <Link to="/mission" className="btn btn-primary">
                Learn more
              </Link>
            </div>
          </div>

          <div className="col-md-6">
            <div>
              <div >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`mySlides ${index === currentSlide ? "active" : ""}`}
                  >
                    {index === currentSlide && (
                      <>
                        <div >
                          {index + 1} / {slides.length}
                        </div>
                        <img src={slide} alt={`Slide ${index + 1}`} className="img-fluid" />
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
