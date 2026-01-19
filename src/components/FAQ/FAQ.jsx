import React from "react";
import AccordionItem from "./AccordionItem";
import "./faq.css";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "What types of furniture do you provide?",
      answer:
        "We provide school furniture, office furniture, hostel furniture, library furniture, and laboratory furniture solutions."
    },
    {
      id: 2,
      question: "Do you offer customized furniture designs?",
      answer:
        "Yes, all our furniture can be customized based on your space, requirements, and budget."
    },
    {
      id: 3,
      question: "What materials are used in your products?",
      answer:
        "We use high-quality wood, steel, and durable materials to ensure long-lasting and reliable furniture."
    },
    {
      id: 4,
      question: "Do you provide installation services?",
      answer:
        "Yes, we provide complete delivery and on-site installation by our experienced team."
    },
    {
      id: 5,
      question: "Is after-sales support available?",
      answer:
        "Absolutely! We provide full after-sales support and warranty coverage for all our products."
    }
  ];

  return (
    <section id="faq" className="faq-section">

      <h2 className="faq-title">Frequently Asked Questions</h2>

      <p className="faq-subtitle">
        Find answers to the most common questions about our products and services
      </p>

      <div className="faq-wrapper">
        {faqs.map((item) => (
          <AccordionItem
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>

    </section>
  );
};

export default FAQ;
