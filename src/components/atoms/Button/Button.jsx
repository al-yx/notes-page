import React from "react";
// import PropTypes from "prop-types";

const Button = ({ children, onClick, size = "medium" }) => {
  let sizeClasses;

  switch (size) {
    case "small":
      sizeClasses = "py-1 px-2 text-sm";
      break;
    case "medium":
      sizeClasses = "py-2 px-4";
      break;
    case "large":
      sizeClasses = "py-3 px-6 text-lg";
      break;
    default:
      sizeClasses = "py-2 px-4";
  }

  return (
    <button
      className={`bg-red-600 text-white rounded hover:bg-red-900 transition ease-in-out duration-300 ${sizeClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func.isRequired,
//   size: PropTypes.oneOf(["small", "medium", "large"]),
// };

export default Button;
