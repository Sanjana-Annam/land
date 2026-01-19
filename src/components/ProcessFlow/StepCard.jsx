import React from "react";
import "./processFlow.css";


const StepCard = ({ number, title, desc, isLast }) => {
  return (
    <div className="step-item">

      <div className="step-circle">
        {number}
      </div>

      {!isLast && <div className="step-line"></div>}

      <div className="step-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>

    </div>
  );
};

export default StepCard;
