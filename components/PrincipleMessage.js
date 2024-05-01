"use client"
import React, { useState } from "react";

const PrincipleMessage = ({ principleName, message, imageUrl }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-gray-100 p-4 md:p-8 rounded-lg shadow-md flex flex-col md:flex-row md:items-center md:m-10 ">
      <div className="md:w-1/3 md:mr-4 mb-4 md:mb-0 flex justify-center md:justify-middle">
        <img src={imageUrl} alt={principleName} className="rounded-full border-4 border-gray-400 w-20 h-20 md:w-48 md:h-60 md:mr-10" />
      </div>
      <div className="md:w-2/3">
        <h2 className="text-slate-950 text-2xl font-bold mb-4">प्रधानाचार्य का सन्देश</h2>
        <div className="text-gray-700">
          {expanded ? message : message.split(" ").slice(0, 50).join(" ") + "... "}
          {message.length > 50 && (
            <button onClick={toggleExpanded} className="text-blue-500 hover:underline">
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>
        <h2 className="text-slate-950 text-2xl font-bold mb-4 mt-4">डा. लाखन सिंह एम.एस.सी (भौतिक विज्ञान), बी.एड., पीएच.डी. प्रधानाचार्य</h2>
      </div>
    </div>
  );
};

export default PrincipleMessage;
