import React from "react";
import Button from "../../atoms/Button/Button";

const Hero = () => {
  return (
    <div className="text-white py-10 px-3 md:py-40 lg:py-40 text-xl font-semibold flex flex-col gap-3">
      <div className="text-6xl text-shadow pb-4">
        Capture Your Thoughts, Anytime, Anywhere
      </div>
      <div className="text-shadow text-4xl">Where Ideas Take Shape.</div>
      <div className="text-shadow">
        Enter your email to create or access your notes.
      </div>
      <div className="input-group flex flex-col md:flex-row lg:flex-row justify-center gap-3 px-4">
        <input
          type="text"
          className="form-control h-12 p-2 md:p-4 lg:p-4 bg-transparent border border-slate-200"
          name="email"
          placeholder="Email Address"
        />
        <span className="input-group-btn">
          <Button size="large">Get started</Button>
        </span>
      </div>
    </div>
  );
};

export default Hero;
