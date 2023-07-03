import React, { useState, useEffect } from "react";

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
    <div
      style={banner ? { width: '100%', height: '30em', overflow: 'hidden' } : {}}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides ${index === currentSlide ? "active" : ""} w-100`}
          style={{
            opacity: index === currentSlide ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          {index === currentSlide && (
            <>
              {!banner &&
                <div >
                  {index + 1} / {slides.length}
                </div>
              }
              <img src={slide} alt={`Slide ${index + 1}`} className="img-fluid banner" />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Slideshow;
