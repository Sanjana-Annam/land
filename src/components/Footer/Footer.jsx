import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">

      <div className="footer-container">

        {/* COMPANY INFO */}
        <div className="footer-col">
          <h3>Jiph Furniture Pvt. Ltd.</h3>

          <p className="footer-text">
            Near Liberty Shoe Factory, GT Road,  
            Gharaunda, Karnal, Haryana,  
            Pin - 132114, India
          </p>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact Us</h4>

          <p>+91-740-465-0000</p>
          <p>+91-989-678-0087</p>

          <p className="timing">
            Mon - Sun: 10AM to 8PM
          </p>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="footer-col">
          <h4>Follow Us</h4>

          <div className="footer-social">

            <a
              href="https://www.linkedin.com/in/pankaj-nagpal-245203253/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.372-1.848 3.605 0 4.271 2.372 4.271 5.456v6.283zM5.337 7.433c-1.144 0-2.067-.928-2.067-2.066 0-1.138.923-2.066 2.067-2.066 1.144 0 2.066.928 2.066 2.066 0 1.138-.922 2.066-2.066 2.066zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.555C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.278V1.723C24 .771 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/jiph_furniture/?igsh=ZHI3a2ZrNDd4OTlq&utm_source=qr#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.342 3.608 1.317.975.975 1.255 2.242 1.317 3.608.058 1.266.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.342 2.633-1.317 3.608-.975.975-2.242 1.255-3.608 1.317-1.266.058-1.645.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.342-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.342-2.633 1.317-3.608.975-.975 2.242-1.255 3.608-1.317C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.333.013 7.052.072 5.771.131 4.602.418 3.635 1.385 2.668 2.352 2.381 3.521 2.322 4.802 2.263 6.083 2.25 6.485 2.25 9.75v4.5c0 3.265.013 3.667.072 4.948.059 1.281.346 2.45 1.313 3.417.967.967 2.136 1.254 3.417 1.313 1.281.059 1.683.072 4.948.072s3.667-.013 4.948-.072c1.281-.059 2.45-.346 3.417-1.313.967-.967 1.254-2.136 1.313-3.417.059-1.281.072-1.683.072-4.948v-4.5c0-3.265-.013-3.667-.072-4.948-.059-1.281-.346-2.45-1.313-3.417C19.398.418 18.229.131 16.948.072 15.667.013 15.265 0 12 0z"/>
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
              </svg>
            </a>

            <a
              href="https://www.facebook.com/jiphfurniture?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.333 24h11.495v-9.333H9.692V11.5h3.136V8.797c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763V11.5h3.587l-.467 3.167h-3.12V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z"/>
              </svg>
            </a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Jiph Furniture Pvt. Ltd. | All Rights Reserved
        </p>
      </div>

    </footer>
  );
};

export default Footer;
