import React from "react";
import Button from "../../atoms/Button/Button";

const Footer = () => {
  return (
    <div className="bg-black text-white text-xl p-24">
      <div className="p-4">
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

export default Footer;
