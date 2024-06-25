import React from "react";
import PictureComponent from "../../molecules/PictureComponent/PictureComponent";
import { FEATURE_CONFIG } from "../../../constants/features.constants";

const Features = () => {
  return (
    <div className="bg-zinc-600">
      {FEATURE_CONFIG.map((feature) => (
        <PictureComponent {...feature} key={feature.title} />
      ))}
    </div>
  );
};

export default Features;
