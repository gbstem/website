'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface SlideshowProps {
  slides: string[];
  captions?: string[];
  imageStyling?: React.CSSProperties;
  captionStyling?: React.CSSProperties;
  banner?: boolean;
}

interface SlideState {
  currentSlide: number;
  // The slide animating out, until its animation ends.
  previousSlide: number | null;
  // Moving to a later slide comes in from the right, an earlier one from the left.
  forward: boolean;
}

function moveTo(state: SlideState, index: number): SlideState {
  if (index === state.currentSlide) return state;
  return {
    currentSlide: index,
    previousSlide: state.currentSlide,
    forward: index > state.currentSlide,
  };
}

/**
 * Advances every 3 seconds; the bars at the bottom jump to a slide. Every slide sits in the same
 * grid cell, so during a change the outgoing and incoming slides overlap while they slide across.
 */
export default function Slideshow({
  slides,
  captions,
  imageStyling,
  captionStyling,
  banner,
}: SlideshowProps) {
  const [{ currentSlide, previousSlide, forward }, setState] = useState<SlideState>({
    currentSlide: 0,
    previousSlide: null,
    forward: true,
  });
  const captionSlides = captions || new Array(slides.length);

  const goTo = (index: number) => setState((state) => moveTo(state, index));

  useEffect(() => {
    const interval = setInterval(() => {
      setState((state) => moveTo(state, (state.currentSlide + 1) % slides.length));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  const slideClass = (index: number) => {
    if (index === currentSlide) {
      if (previousSlide === null) return 'block';
      return forward ? 'block animate-carousel-in-next' : 'block animate-carousel-in-prev';
    }
    if (index === previousSlide) {
      return forward
        ? 'block animate-carousel-out-next motion-reduce:hidden'
        : 'block animate-carousel-out-prev motion-reduce:hidden';
    }
    return 'hidden';
  };

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
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 z-2 mx-[15%] mb-4 flex justify-center">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Slide ${index + 1}`}
              aria-current={index === currentSlide}
              onClick={() => goTo(index)}
              className={`mx-[3px] box-content h-[3px] w-[30px] flex-[0_1_auto] border-y-10 border-y-transparent bg-white bg-clip-padding p-0 transition-opacity duration-600 ${index === currentSlide ? 'opacity-100' : 'opacity-50'}`}
            />
          ))}
        </div>
        <div className="relative grid w-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-full [grid-area:1/1] backface-hidden motion-reduce:animate-none ${slideClass(index)}`}
              onAnimationEnd={() =>
                setState((state) =>
                  state.previousSlide === index ? { ...state, previousSlide: null } : state
                )
              }
            >
              <Image
                src={slide}
                alt={captions?.[index] || ''}
                aria-hidden={!captions?.[index]}
                className="max-w-full object-cover"
                width={1200}
                height={800}
                style={imageStyling}
              />
              <div style={captionStyling}>{captionSlides[currentSlide]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
