import React from "react";
import PropTypes from "prop-types";

/**
 * Card Component
 *
 * A reusable card component with different variants using Tailwind CSS
 */
const Card = ({ children, title, className = "", variant = "default" }) => {
  const baseClasses = "rounded-lg overflow-hidden shadow";

  const variants = {
    default: "bg-white",
    elevated: "bg-white shadow-lg",
    outlined: "bg-white border border-gray-200",
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      {title && (
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "elevated", "outlined"]),
};

export default Card;
