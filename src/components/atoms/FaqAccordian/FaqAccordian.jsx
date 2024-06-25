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
    <div className="bg-black text-white px-5 md:px-24 lg:px-24 py-4">
      <div className="text-3xl font-bold p-5 md:p-8 lg:p-8">
        Frequently Asked Questions
      </div>
      {faqData.map((item, index) => (
        <div key={index} className="mb-2">
          <div
            className="flex justify-between py-2 px-4 bg-zinc-600 cursor-pointer rounded"
            onClick={() => handleToggle(index)}
          >
            <span className="lg:text-2xl text-xl text-left p-2 font-medium">
              {item.question}
            </span>
            <svg
              className={`min-w-6 h-6 ${
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
            <div className="bg-zinc-600 p-4 mt-2 rounded animate-fade">
              <p className="text-white text-left text-xl">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
