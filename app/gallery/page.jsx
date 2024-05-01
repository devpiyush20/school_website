import React from 'react';
import MediaGallery from '@/components/MediaGallery';
import Image from "next/image";

const page = () => {

    const images = [
        { url: "/assets/g/i1.jpeg" },
        { url: "/assets/g/i3.jpeg" },
        { url: "/assets/g/i4.jpeg" },
        { url: "/assets/g/i5.jpeg" },
        { url: "/assets/g/i6.jpeg" },
        { url: "/assets/g/i7.jpeg" },
        { url: "/assets/g/i9.jpg" },
        { url: "/assets/g/i10.jpg" },
        { url: "/assets/g/i11.jpg"},
        { url: "/assets/g/i12.jpg"},
        { url: "/assets/g/i13.jpg"},
        { url: "/assets/g/i14.jpg"},
        { url: "/assets/g/i15.jpg"},
        { url: "/assets/g/i16.jpg"},
        { url: "/assets/g/i17.jpg"},
        { url: "/assets/g/i18.jpeg"},
        { url: "/assets/g/i19.jpg"},

      
        // Add more images as needed
      ];
      
  return (
    <div className="container mx-auto py-8 text-center">
    <h1 className=" text-3xl font-bold mb-4">Media Gallery</h1>
    <MediaGallery images={images} />
  </div>
  )
}

export default page
