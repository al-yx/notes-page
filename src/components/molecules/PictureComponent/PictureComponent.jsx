import React from "react";

const PictureComponent = ({ imgSrc, imgAlt, title, description, reverse }) => {
  return (
    <div className="bg-black">
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center my-4 p-12`}
      >
        <div className="md:w-1/2 p-4">
          <img src={imgSrc} alt={imgAlt} className="w-full h-auto rounded" />
        </div>
        <div className="md:w-1/2 p-4 text-white text-left p-8">
          <h2 className="text-5xl font-bold mb-4">{title}</h2>
          <p className="text-2xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PictureComponent;
