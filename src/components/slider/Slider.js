import React, { useState, useEffect } from 'react';
import Arrow from './Arrow';
import Dots from './Dots';
import './slider.css';
import SliderContent from './SliderContent';
import sliderImage from './sliderImage';

const len = sliderImage.length - 1;

const Slider = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex == len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} />
      <Arrow
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots activeIndex={activeIndex} onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />

    </div>

  )
}
export default Slider