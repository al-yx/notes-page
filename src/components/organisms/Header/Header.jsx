import React from "react";
import Button from "../../atoms/Button/Button";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-6 md:p-10 lg:p-10">
      <div className="text-red-600 font-mono font-bold"> Acme</div>
      <Button size="large">Sign In</Button>
    </div>
  );
};

export default Header;
