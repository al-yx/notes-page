import React, { useState } from "react";

const FaqAccordion = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="bg-black text-white px-24 py-4">
      <div className="text-3xl font-bold p-8">Frequently Asked Questions</div>
      {faqData.map((item, index) => (
        <div key={index} className="mb-6">
          <div
            className="flex justify-between items-center py-2 px-4 bg-zinc-600 cursor-pointer rounded"
            onClick={() => handleToggle(index)}
          >
            <span className="text-2xl font-medium">{item.question}</span>
            <svg
              className={`w-6 h-6 ${
                activeIndex === index ? "transform rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={activeIndex === index ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
              />
            </svg>
          </div>
          {activeIndex === index && (
            <div className="bg-zinc-600 py-2 px-4 mt-2 rounded">
              <p className="text-white text-left text-xl">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
