// components/ImageCarousel.js
"use client"
import React, { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <img  width={1500} height={1200} src={images[currentIndex]} alt="carousel" className="max-w-full h-auto" />
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l"
        onClick={goToPrevSlide}
      >
        Previous
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r"
        onClick={goToNextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default ImageCarousel;
