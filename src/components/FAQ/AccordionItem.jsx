import React, { useState } from "react";
import "./faq.css";

const AccordionItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`accordion-item ${open ? "active" : ""}`}>

      <div className="accordion-header" onClick={() => setOpen(!open)}>
        <h3>{question}</h3>
        <span className="accordion-icon">{open ? "−" : "+"}</span>
      </div>

      <div className="accordion-content">
        <p>{answer}</p>
      </div>

    </div>
  );
};

export default AccordionItem;
