import React from "react";
import "./test.css";

const TestCard = ({ name, designation, text }) => {

  // Get first letter of name
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="test-card">

      <div className="client-header">

        {/* Circle Avatar with Initial */}
        <div className="client-initial">
          {initial}
        </div>

        <div className="client-meta">
          <h4>{name}</h4>
          <span>{designation}</span>
        </div>

      </div>

      <p className="review-text">
        {text}
      </p>

    </div>
  );
};

export default TestCard;
