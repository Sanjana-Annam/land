import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../../assets/categories/BrandLogo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">

        <div className="logo-area">
          <img src={logo} alt="Jiph Furniture Logo" />
        </div>

        <nav className="header-nav">
          <a href="#home">Home</a>
          <a href="#offerings">Products</a>
          <a href="#process">Process</a>
          <a href="#testimonials">Clients</a>
          <a href="#faq">FAQs</a>
          <a href="#contact" className="nav-cta">
            Get Quote
          </a>
        </nav>

        <div className="mobile-cta">
          <a href="#contact" className="nav-cta">
            Get Quote
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;
