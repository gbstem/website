'use client';

import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';

interface SlideshowProps {
  slides: string[];
  captions?: string[];
  imageStyling?: React.CSSProperties;
  captionStyling?: React.CSSProperties;
  banner?: boolean;
}

export default function Slideshow({
  slides,
  captions,
  imageStyling,
  captionStyling,
  banner,
}: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const captionSlides = captions || new Array(slides.length);

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
      style={
        banner
          ? {
              width: '100%',
              height: 0,
              paddingBottom: '30%',
              overflow: 'hidden',
            }
          : { width: 'fit-content', margin: 'auto' }
      }
    >
      <Carousel interval={3000} activeIndex={currentSlide} controls={false} onSelect={() => {}}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="d-block w-100">
              <Image
                src={slide}
                alt={captions?.[index] || ''}
                aria-hidden={!captions?.[index]}
                className="img-fluid banner"
                width={1200}
                height={800}
                style={imageStyling}
              />
              <div style={captionStyling}>{captionSlides[currentSlide]}</div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
