"use client"
import React from 'react';
import Image from "next/image";

const MentorsComponent = () => {
  return (
    <div className="container mx-auto py-12 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <img src="/assets/m1.png" alt="Mentor 1" className="mx-auto w-full rounded-lg" />
          <h3 className=" text-slate-800 text-lg font-bold mt-4"> मेजर हरबीर सिंह</h3>
          <h4 className="text-slate-600 text-lg font-bold mt-4"> (अध्यक्ष)</h4>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <img src="/assets/m2.png" alt="Mentor 2" className="mx-auto w-full rounded-lg" />
          <h3 className=" text-slate-800 text-lg font-bold mt-4">श्री देवेन्द्र पाल सिंह</h3>
          <h4 className="text-slate-600 text-lg font-bold mt-4"> (प्रबन्धक)</h4>
        </div>
      </div>
    </div>
  );
};

export default MentorsComponent;
