import React from "react";
import Button from "../../atoms/Button/Button";

const Hero = () => {
  return (
    <div className="text-white py-40 text-xl font-semibold flex flex-col gap-3 px-10">
      <div className="text-4xl">
        Capture Every Thought. Organize with Ease. Remember Effortlessly.
      </div>
      <div>Where Ideas Take Shape.</div>
      <div>
        Ready to get organized? Enter your email to create or access your notes.
      </div>
      <div className="input-group text-black flex justify-center gap-3">
        <input
          type="text"
          className="form-control h-12 p-6"
          name="email"
          placeholder="Enter your email"
        />
        <span className="input-group-btn">
          <Button size="large">Get started</Button>
        </span>
      </div>
    </div>
  );
};

export default Hero;
