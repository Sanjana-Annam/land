import React, { useEffect, useRef } from "react";
import CategorySlide from "./CategorySlide";
import "./carousel.css";

// ===== IMPORT IMAGES =====
import complabMain from "../../assets/categories/Complab-main.webp";
import labMain from "../../assets/categories/Lab-main.jpg";
import hospitalMain from "../../assets/categories/Hospital-Main.jpg";
import hostelMain from "../../assets/categories/Hostel-main.jpg";
import schoolMain from "../../assets/categories/school-main.avif";
import officeMain from "../../assets/categories/office-main.avif";

import complab1 from "../../assets/categories/Complab1.jpg";
import complab2 from "../../assets/categories/Complab2.jpg";
import complab3 from "../../assets/categories/Complab3.jpg";
import complab4 from "../../assets/categories/Complab4.jpg";

import hospital1 from "../../assets/categories/Hospital1.jpg";
import hospital2 from "../../assets/categories/Hospital2.jpg";
import hospital3 from "../../assets/categories/Hospital3.jpg";
import hospital4 from "../../assets/categories/Hospital4.jpg";

import hostel1 from "../../assets/categories/Hostel1.jpg";
import hostel2 from "../../assets/categories/Hostel2.jpg";
import hostel3 from "../../assets/categories/Hostel3.jpg";
import hostel4 from "../../assets/categories/Hostel4.jpg";

import lab1 from "../../assets/categories/Lab1.jpg";
import lab2 from "../../assets/categories/Lab2.jpg";
import lab3 from "../../assets/categories/Lab3.jpg";
import lab4 from "../../assets/categories/Lab4.jpg";

import school1 from "../../assets/categories/school1.webp";
import school2 from "../../assets/categories/school2.avif";
import school3 from "../../assets/categories/school3.avif";
import school4 from "../../assets/categories/school4.avif";

import office1 from "../../assets/categories/office1.avif";
import office2 from "../../assets/categories/office2.webp";
import office3 from "../../assets/categories/office3.avif";
import office4 from "../../assets/categories/office4.avif";

const CategoryCarousel = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (wrapperRef.current) {
        const container = wrapperRef.current;

        const maxScroll =
          container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          container.scrollBy({
            left: 360,
            behavior: "smooth",
          });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const categories = [
    {
      title: "School Furniture",
      mainImage: schoolMain,
      subImages: [school1, school2, school3, school4],
    },
    {
      title: "Office Furniture",
      mainImage: officeMain,
      subImages: [office1, office2, office3, office4],
    },
    {
      title: "Computer Lab Furniture",
      mainImage: complabMain,
      subImages: [complab1, complab2, complab3, complab4],
    },
    {
      title: "Hospital Furniture",
      mainImage: hospitalMain,
      subImages: [hospital1, hospital2, hospital3, hospital4],
    },
    {
      title: "Hostel Furniture",
      mainImage: hostelMain,
      subImages: [hostel1, hostel2, hostel3, hostel4],
    },
    {
      title: "Laboratory Furniture",
      mainImage: labMain,
      subImages: [lab1, lab2, lab3, lab4],
    },
  ];

  return (
    <section className="carousel-section" id="offerings">

      <div className="carousel-header">
        <span className="section-badge">OUR SOLUTIONS</span>

        <h2>Institutional Furniture Categories</h2>

        <p>
          Specialized furniture collections designed for durability,
          comfort and long-term institutional use
        </p>
      </div>

      <div className="carousel-wrapper" ref={wrapperRef}>
        <div className="carousel-track">
          {categories.map((item, index) => (
            <CategorySlide key={index} {...item} />
          ))}
        </div>
      </div>

      <div className="carousel-cta">
        <a
          href="https://www.jiphfurniture.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="explore-btn"
        >
          View Complete Product Range
        </a>
      </div>

    </section>
  );
};

export default CategoryCarousel;
