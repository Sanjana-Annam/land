import React from "react";

const BrandCard = ({ logo, alt }) => {
  return (
    <div className="brand-card">
      <img src={logo} alt={alt} className="brand-logo" />
    </div>
  );
};

export default BrandCard;
