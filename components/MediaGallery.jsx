import React from 'react';

const MediaGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md">
          <img src={image.url} alt={image.caption} className="w-full h-auto rounded-lg" />
          
        </div>
      ))}
    </div>
  );
};

export default MediaGallery;
