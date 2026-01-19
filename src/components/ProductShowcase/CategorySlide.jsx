import React from "react";
import "./carousel.css";

const CategorySlide = ({ title, mainImage, subImages }) => {
  return (
    <div className="category-card">

      <div className="category-main">
        <img src={mainImage} alt={title} />
      </div>

      <h3>{title}</h3>

      <div className="mini-images">
        {subImages.map((img, index) => (
          <div className="mini-box" key={index}>
            <img src={img} alt={title} />
          </div>
        ))}
      </div>

      <a
        href="https://www.jiphfurniture.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        Explore Solutions →
      </a>

    </div>
  );
};

export default CategorySlide;
