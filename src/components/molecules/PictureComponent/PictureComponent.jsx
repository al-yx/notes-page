import React, { useRef } from "react";
import useOnScreen from "../../../hooks/useOnScreen";

const PictureComponent = ({ imgSrc, imgAlt, title, description, reverse }) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  return (
    <div className={`bg-black ${isVisible ? "animate-fade" : ""}`} ref={ref}>
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center my-4 sm:p-6 md:p-12 lg:p-12`}
      >
        <div className="md:w-1/2 p-4">
          <img src={imgSrc} alt={imgAlt} className={"w-full h-auto rounded"} />
        </div>
        <div className="md:w-1/2 p-4 text-white sm:text-center md:text-left lg:text-left md:p-8 lg:p-8">
          <h2 className="text-5xl font-bold mb-4">{title}</h2>
          <p className="text-2xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PictureComponent;
