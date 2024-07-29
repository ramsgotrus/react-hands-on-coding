import React, { useState } from "react";
import "./styles.css";

interface Slide {
  id: number;
  image: string;
  caption: string;
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const nextSlide = () => {
    setCurrentSlideIndex((prevSldie) => (prevSldie + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlideIndex(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };
  return (
    <div className="carousel">
      <button onClick={prevSlide}>&lt;</button>
      <div className="slide">
        <img
          src={slides[currentSlideIndex].image}
          alt={slides[currentSlideIndex].image}
        />
        <p>{slides[currentSlideIndex].caption}</p>
      </div>

      <button onClick={nextSlide}>&gt;</button>
    </div>
  );
};
export default Carousel;
