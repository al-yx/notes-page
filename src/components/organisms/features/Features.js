import React from "react";
import PictureComponent from "../../molecules/PictureComponent/PictureComponent";
import { FEATURE_CONFIG } from "../../../constants/features.constants";

const Features = () => {
  return (
    <div>
      <div className="text-4xl md:text-6xl text-shadow pt-12 text-white">
        What Makes Us Great?
      </div>
      <div className="bg-zinc-600">
        {FEATURE_CONFIG.map(feature => (
          <PictureComponent {...feature} key={feature.title} />
        ))}
      </div>
    </div>
  );
};

export default Features;
