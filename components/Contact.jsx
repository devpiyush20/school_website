"use client"
import React from 'react';

const ContactComponent = () => {
  return (
    <div className="container py-12 p-5">
      <h2 className="text-white text-3xl font-bold text-center mb-8">अधिक जानकारी हेतु संपर्क करें</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <h3 className="text-slate-950 text-lg font-bold mb-2">श्री सुरेन्द्र सिंह</h3>
          <p className="text-gray-700">मो: 7017102926</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <h3 className="text-slate-950 text-lg font-bold mb-2">श्री सत्येन्द्र कुमार</h3>
          <p className="text-gray-700">मो: 7619922290</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <h3 className="text-slate-950 text-lg font-bold mb-2">श्री पंकज वर्मा</h3>
          <p className="text-gray-700">मो: 9997740299</p>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
