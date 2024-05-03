// components/ImageCarousel.js
"use client"
import React, { useState } from "react";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

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
    <div className="w-full ">
      <FaChevronCircleLeft className="iconn btn-l" onClick={goToPrevSlide}/>
      <div className="flex items-center justify-center ">
        <img style={{maxHeight:"450px"}}   src={images[currentIndex]} alt="carousel" className="imgg w-full" />
      </div>
        <FaChevronCircleRight className="btn-r iconn" onClick={goToNextSlide}/>
    </div>
  );
};

export default ImageCarousel;
