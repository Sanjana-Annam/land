import React from "react";
import TestCard from "./TestCard";
import "./test.css";

const Test = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sanya Kapoor",
      designation: "Principal – Delhi Public School",
      text: "Jiph Furniture provided us with exceptional school furniture. The quality and finishing exceeded our expectations. Highly professional team and timely delivery."
    },
    {
      id: 2,
      name: "Nisha Varma",
      designation: "Facility Manager – Green Valley School",
      text: "The wooden wardrobes and classroom furniture are superb in quality. Installation was smooth and the team was very cooperative throughout."
    },
    {
      id: 3,
      name: "Kiran Menon",
      designation: "Admin Head – Global Academy",
      text: "The writing pad chairs are extremely comfortable and durable. Students and staff are very happy with the new setup."
    },
    {
      id: 4,
      name: "Vihaan Reddy",
      designation: "Operations Manager – EduTech Campus",
      text: "Jiph Furniture transformed our classrooms with modern furniture solutions. Excellent craftsmanship and great after-sales support."
    },
    {
      id: 5,
      name: "Rajesh Kumar",
      designation: "Hostel Warden – National College",
      text: "We installed hostel bunk beds and storage units. Very sturdy products and value for money. Would definitely recommend."
    }
  ];

  return (
    <section id="testimonials" className="test-section">

      <div className="test-header">
        <span className="section-badge">TESTIMONIALS</span>
        <h2>What Our Clients Say</h2>
        <p>Real feedback from institutions we proudly serve</p>
      </div>

      <div className="test-grid">
        {testimonials.map((item) => (
          <TestCard key={item.id} {...item} />
        ))}
      </div>

    </section>
  );
};

export default Test;
