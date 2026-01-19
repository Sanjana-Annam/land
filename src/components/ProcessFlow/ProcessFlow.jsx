import React from "react";
import StepCard from "./StepCard";
import "./processFlow.css";

const ProcessFlow = () => {
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Consultation",
      desc: "We understand your requirements, space constraints, and budget to propose the perfect solution."
    },
    {
      id: 2,
      number: "02",
      title: "Design Proposal",
      desc: "Our team creates detailed designs and 3D mockups for your approval before production."
    },
    {
      id: 3,
      number: "03",
      title: "Manufacturing & QC",
      desc: "State-of-the-art manufacturing with rigorous quality control at every stage."
    },
    {
      id: 4,
      number: "04",
      title: "Delivery & Installation",
      desc: "Professional delivery and on-site installation by our experienced technicians."
    },
    {
      id: 5,
      number: "05",
      title: "Support",
      desc: "Comprehensive after-sales support and warranty coverage for your peace of mind."
    }
  ];

  return (
    <section id="process" className="process-section">

  <div className="carousel-header">
    <span className="section-badge">HOW WE WORK</span>
    <h2 className="process-title">Our Work Process</h2>
  </div>


      <p className="process-subtitle">
        A simple, transparent and professional approach from start to finish
      </p>

      <div className="process-wrapper">
        {steps.map((step, index) => (
          <StepCard
            key={step.id}
            {...step}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>

    </section>
  );
};

export default ProcessFlow;
