// components/ImageCarousel.js
"use client"
import React, { useState } from "react";
const images = [
  "/assets/img1.jpg",
  "/assets/img2.jpg",
  "/assets/img3.jpeg",
  "/assets/img4.jpg",
];
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="w-full">
      <button
        className="absolute ml-1 z-3 top-1/2 transform-translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l"
        onClick={goToPrevSlide}
      >
        Previous
      </button>
      <div className="flex items-center justify-center">
        <img style={{height:"450px"}}   src={images[currentIndex]} alt="carousel" className=" z-1 w-full" />
      <button
        className=" absolute bt-l z-3 top-1/2 transform-translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r"
        onClick={goToNextSlide}
      >
        Next
      </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
